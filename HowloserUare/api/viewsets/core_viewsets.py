"""
Core viewsets
"""
import logging
import traceback

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import list_route

from api.serializers import UserSerializer, User
from core.utils import encrypt_string, UserPermission

logger = logging.getLogger('api.core')


class CoreViewSet(viewsets.ViewSet):
    permission_classes = (UserPermission,)

    def return_error(self, msg):
        return Response({'status': False, 'msg': msg})

    @list_route(methods=['post', ], permission_classes=[])
    def signup(self, request):
        try:
            serializer = UserSerializer(data=request.data)
            is_valid = serializer.is_valid(raise_exception=False)
            if not is_valid:
                filed = list(serializer.errors)[0]
                errors = serializer.errors[filed][0]
                return self.return_error("{}: {}".format(filed, errors))
            # encrypt password
            serializer.save(
                password=encrypt_string(request.data.get('password')))
            return Response({'status':True})
        except Exception as e:
            logger.error(traceback.format_exc())
            return Response(
                {'status': False, 'msg': str(e)}, status=500)

    @list_route(methods=['post', ], permission_classes=[])
    def login(self, request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            user_obj = User.objects.filter(username=username).first()
            if not user_obj:
                return self.return_error('User not exists.')
            if not password:
                return self.return_error('password may not be blank.')
            if not user_obj.password == encrypt_string(password):
                return self.return_error('incurrect password.')
            # write to session
            request.session['userid'] = user_obj.id
            return Response({'status': True})
        except Exception as e:
            logger.error(traceback.format_exc())
            return Response(
                {'status': False, 'msg': str(e)}, status=500)

    @list_route(methods=['get',])
    def status(self, request):
        return Response({'status': True}, status=200)

    @list_route(methods=['get',])
    def logout(self, request):
        try:
            # destory session
            del request.session['userid']
            return Response({'status': True})
        except Exception as e:
            logger.error(traceback.format_exc())
            return Response(
                {'status': False, 'msg': str(e)}, status=500)