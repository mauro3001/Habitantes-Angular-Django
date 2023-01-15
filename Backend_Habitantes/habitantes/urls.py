from rest_framework import routers
from .api import ProjectViewSet, CiudadViewSet

router = routers.DefaultRouter()

router.register('api/habitantes', ProjectViewSet, 'habitantes')
router.register('api/ciudad', CiudadViewSet, 'ciudad')

urlpatterns = router.urls