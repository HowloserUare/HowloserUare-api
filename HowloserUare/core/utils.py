from hashlib import md5
from django.conf import settings

salt = bytes(settings.SECRET_KEY, 'utf-8')


def encrypt_string(origin_string):
    origin_string = bytes(origin_string, 'utf-8')
    md5_obj = md5()
    md5_obj.update(origin_string + salt)
    return md5_obj.hexdigest()
