from django.db import models

# Create your models here.

# Create your models here.

#Modelo para la ciudad
class Ciudad(models.Model):
    ciudad = models.CharField(max_length=100)

#Modelo para los habitantes
class Habitantes(models.Model):
    nombres = models.CharField(max_length=60)
    apellidos = models.CharField(max_length=60)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=30)
    cedula = models.CharField(max_length=100)
    ciudad = models.ForeignKey(Ciudad, null=True, on_delete=models.CASCADE)
