"""
Expenses viewsets
"""
import logging
import traceback

from django.db.models import Sum

from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import list_route

# from api.serializers import User, Income
# from api.serializers import IncomeSerializer
# from api.filter import
from core.utils import UserPermission

logger = logging.getLogger('api.expenses')


class ExpensesViewSet(ViewSet):
    permission_classes = (UserPermission, )
    paginator = PageNumberPagination()
    # serializers = 

    def catch_error(func):
        def wrappers(self, *args, **kwargs):
            try:
                return func(self, *args, **kwargs)
            except Exception as e:
                logger.error(traceback.format_exc())
                return Response(
                    {'status': False, 'msg': str(e)}, status=500)
        return wrappers

    @catch_error
    def list(self, request):
        pass

    @catch_error
    def create(self, request):
        pass
    
    @catch_error
    def retrieve(self, request, pk):
        pass
    
    @catch_error
    def destroy(self, request, pk):
        pass
    
    @catch_error
    def update(self, request, pk):
        pass