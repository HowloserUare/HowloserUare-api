from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from core.models import User
from deposit.models import Income, Expenses


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        max_length=16,
        min_length=5,
        validators=[UniqueValidator(User.objects.all()), ])
    password = serializers.CharField(
        max_length=64, min_length=6)

    class Meta:
        model = User
        exclude = ('id',)


class IncomeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Income
        exclude = ('user', )