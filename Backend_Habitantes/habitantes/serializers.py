from rest_framework import serializers
from .models import Habitantes, Ciudad

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitantes
        fields = ('id', 'nombres', 'apellidos', 'direccion', 'telefono', 'cedula', 'ciudad')

class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ('id', 'ciudad')
