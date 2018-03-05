"""
Income viewsets
"""
import logging
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import list_route

from api.serializers import User
from core.utils import UserPermission

logger = logging.getLogger('api.income')
