# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-02-15 19:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.TextField(blank=True, default='/assets/img/avatar.jpg', null=True),
        ),
    ]
