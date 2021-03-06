# Generated by Django 3.0.3 on 2020-06-25 23:47

import api.validators
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0008_auto_20200625_2335'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='cpf',
            field=models.CharField(max_length=11, unique=True, validators=[api.validators.cpf_validator]),
        ),
        migrations.AlterField(
            model_name='person',
            name='user',
            field=models.OneToOneField(editable=False, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
