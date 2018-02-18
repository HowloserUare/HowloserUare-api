from rest_framework.routers import DefaultRouter

from api.viewsets.test_viewsets import TestViewSet
from api.viewsets.core_viewsets import CoreViewSet


router = DefaultRouter()

"""
router example
router.register(r'test', TestViewSet)
"""
router.register(r'test', TestViewSet, base_name='api-test')
router.register(r'core', CoreViewSet, base_name='api-core')

urlpatterns = router.urls
