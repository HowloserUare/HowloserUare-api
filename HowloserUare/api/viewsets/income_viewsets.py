"""
Income viewsets
"""
import logging
import traceback

from django.db.models import Sum

from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import list_route

from api.serializers import User, Income
from api.serializers import IncomeSerializer
from api.filter import IncomeFilter
from core.utils import UserPermission

logger = logging.getLogger('api.income')


class IncomeViewSet(ViewSet):
    permission_classes = (UserPermission,)
    paginator = PageNumberPagination()
    serializers = IncomeSerializer

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
        queryset = Income.objects.filter(user=request.session.get('userid')).all()
        filter_obj = IncomeFilter(request.query_params, queryset)
        queryset = filter_obj.conditions_queryset()
        # page json data
        page = self.paginator.paginate_queryset(queryset, request)
        serializers = self.serializers(page, many=True)
        return self.paginator.get_paginated_response(serializers.data)
    
    @catch_error
    def create(self, request):
        serializers = self.serializers(data=request.data)
        serializers.is_valid(raise_exception=True)
        income_obj = serializers.save(user_id=request.session.get('userid'))
        # return json data
        return Response(self.serializers(income_obj).data)
    
    @catch_error
    def retrieve(self, request, pk):
        queryset = Income.objects.filter(
            user_id=request.session.get('userid'), id=pk).first()
        if not queryset:
            return Response(
                {'status': False, 'msg': 'income record not exists'}, status=404)
        serializers = self.serializers(queryset)
        return Response(serializers.data)

    @catch_error
    def destroy(self, request, pk):
        queryset = Income.objects.filter(
            user_id=request.session.get('userid'), id=pk).first()
        if not queryset:
            return Response(
                {'status': False, 'msg': 'income record not exists'}, status=404)
        queryset.delete()
        return Response({'status': True}, status=204)
    
    @catch_error
    def update(self, request, pk):
        queryset = Income.objects.filter(
            user_id=request.session.get('userid'), id=pk).first()
        if not queryset:
            return Response(
                {'status': False, 'msg': 'income record not exists'}, status=404)
        querydict = {
            'amount': request.data.get('amount'),
            'type': request.data.get('type')
        }
        serializers = self.serializers(
            queryset, data=querydict, partial=True)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)

    @list_route(methods=['get'])
    def income(self, request):
        try:
            queryset = Income.objects.filter(user_id=request.session.get('userid'))
            filter_obj = IncomeFilter(request.query_params, queryset)
            queryset = filter_obj.conditions_queryset()
            # return sum amount
            return Response(
                {'count': queryset.aggregate(Sum('amount')).get('amount__sum', 0)})
        except Exception as e:
            logger.error(traceback.format_exc())
            return Response(
                {'status': False, 'msg': str(e)}, status=500)
