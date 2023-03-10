# Generated by Django 4.1.5 on 2023-01-14 05:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ciudad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ciudad', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Habitantes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=60)),
                ('apellidos', models.CharField(max_length=60)),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=30)),
                ('cedula', models.CharField(max_length=100)),
                ('ciudad', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='habitantes.ciudad')),
            ],
        ),
    ]
