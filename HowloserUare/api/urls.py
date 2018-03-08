from rest_framework.routers import DefaultRouter

from api.viewsets.test_viewsets import TestViewSet
from api.viewsets.core_viewsets import CoreViewSet
from api.viewsets.income_viewsets import IncomeViewSet


router = DefaultRouter()

"""
router example
router.register(r'test', TestViewSet)
"""
router.register(r'test', TestViewSet, base_name='api-test')
router.register(r'core', CoreViewSet, base_name='api-core')
router.register(r'income', IncomeViewSet, base_name='api-income')

urlpatterns = router.urls
