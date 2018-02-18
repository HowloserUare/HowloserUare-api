from django.db import models


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=16, unique=True)
    password = models.CharField(max_length=64)
    avatar = models.TextField(
        default='/assets/img/avatar.jpg', blank=True, null=True)
