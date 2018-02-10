from rest_framework.routers import DefaultRouter

from api.viewsets.test_viewsets import TestViewSet


router = DefaultRouter()

"""
router example
router.register(r'test', TestViewSet)
"""
router.register(r'test', TestViewSet, base_name='api-test')

urlpatterns = router.urls
