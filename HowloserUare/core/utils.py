from hashlib import md5
from django.conf import settings
from rest_framework.permissions import BasePermission
from rest_framework.response import Response

from core.models import User

salt = bytes(settings.SECRET_KEY, 'utf-8')


class UserPermission(BasePermission):
    """
    jugement user login or not
    """
    def has_permission(self, request, view):
        try:
            # get session `userid` juge userid in database or not
            user_id = request.session.get('userid')
            if not user_id:
                return False
            user_obj = User.objects.filter(id=user_id)
            if not user_obj:
                return Response(
                    {'status': False, 'msg': 'incurrect user id'},
                    status=403)
            return True
        except Exception as e:
            return Response(
                {'status': False, 'msg': str(e)},
                status=500)


def encrypt_string(origin_string):
    origin_string = bytes(origin_string, 'utf-8')
    md5_obj = md5()
    md5_obj.update(origin_string + salt)
    return md5_obj.hexdigest()
