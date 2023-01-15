from habitantes.models import Habitantes, Ciudad
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer, CiudadSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Habitantes.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProjectSerializer

class CiudadViewSet(viewsets.ModelViewSet):
    queryset = Ciudad.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CiudadSerializer