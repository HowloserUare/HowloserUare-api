"""
Core viewsets
"""
import logging
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import list_route
from rest_framework.authentication import TokenAuthentication
from rest_framework.authentication import SessionAuthentication

from api.serializers import UserSerializer, User
from core.utils import encrypt_string

logger = logging.getLogger('api.core')


class CoreViewSet(viewsets.ViewSet):
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = (IsAuthenticated, )

    def return_error(self, msg):
        return Response({'status': False, 'msg': msg})

    @list_route(methods=['post', ])
    def signup(self, request):
        try:
            serializer = UserSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            # encrypt password
            serializer.save(
                password=encrypt_string(request.data.get('password')))
            return Response(request.data.get('username'))
        except Exception as e:
            logger.error(str(e))
            return Response(
                {'status': False, 'msg': str(e)}, status=500)

    @list_route(methods=['post', ])
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
            logger.error(str(e))
            return Response(
                {'status': False, 'msg': str(e)}, status=500)
