"""
Example viewsets
"""
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import detail_route, list_route
from rest_framework.authentication import TokenAuthentication, SessionAuthentication


class TestViewSet(viewsets.ViewSet):
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (IsAuthenticated, )

    def list(self, request):
        return Response({'status': True})

    def create(self, request):
        return Response({'status': True})

    def delete(self, request, pk):
        return Response({'status': True})

    def retrieve(self, request, pk):
        return Response({'status': True})

    def update(self, request, pk):
        return Response({'status': True})
