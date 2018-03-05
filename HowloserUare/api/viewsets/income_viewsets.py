"""
Income viewsets
"""
import logging
import traceback

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import list_route

from api.serializers import User, Income
from api.serializers import IncomeSerializer
from core.utils import UserPermission

logger = logging.getLogger('api.income')


class IncomeViewSet(viewsets.ViewSet):
    permission_classes = (UserPermission,)
    pageinator = PageNumberPagination()
    serializers = IncomeSerializer

    def income_record_exists(func):
        def wrappers(self, *args, **kwargs):
            try:
                return func(self, *args, **kwargs)
            except Exception as e:
                logger.error(traceback.format_exc())
                return Response(
                    {'status': False, 'msg': str(e)}, status=500)
        return wrappers

    @income_record_exists
    def list(self, request):
        queryset = Income.objects.filter(
            user=request.session.get('userid')).all().order_by('datetime')
        # page json data
        page = self.pageinator.paginate_queryset(queryset, request)
        serializers = self.serializers(page, many=True)
        return self.pageinator.get_paginated_response(serializers.data)
    
    @income_record_exists
    def create(self, request):
        serializers = self.serializers(data=request.data)
        serializers.is_valid(raise_exception=True)
        income_obj = serializers.save(user_id=request.session.get('userid'))
        # return json data
        return Response(self.serializers(income_obj).data)
    
    @income_record_exists
    def retrieve(self, request, pk):
        queryset = Income.objects.filter(
            user_id=request.session.get('userid'), id=pk).first()
        if not queryset:
            return Response(
                {'status': False, 'msg': 'income record not exists'}, status=404)
        serializers = self.serializers(queryset)
        return Response(serializers.data)

    @income_record_exists
    def delete(self, request, pk):
        queryset = Income.objects.filter(
            user_id=request.session.get('userid'), id=pk).first()
        if not queryset:
            return Response(
                {'status': False, 'msg': 'income record not exists'}, status=404)
        queryset.delete()
        return Response({'status': True}, status=204)
    
    @income_record_exists
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
    def loans(self, request):
        return Response('building')
        