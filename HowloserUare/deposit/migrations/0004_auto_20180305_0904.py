# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-03-05 09:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('deposit', '0003_auto_20180305_0904'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expenses',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.User'),
        ),
    ]