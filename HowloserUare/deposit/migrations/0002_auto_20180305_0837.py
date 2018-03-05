# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-03-05 08:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('deposit', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='expenses',
            name='repay',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='deposit.Income'),
        ),
        migrations.AlterField(
            model_name='expenses',
            name='remarks',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='income',
            name='remarks',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='income',
            name='type',
            field=models.CharField(choices=[('1', 'salary'), ('2', 'loan'), ('3', 'other')], max_length=1),
        ),
    ]