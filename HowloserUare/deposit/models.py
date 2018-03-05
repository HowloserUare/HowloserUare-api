from django.db import models
from core.models import User

# Create your models here.
class Income(models.Model):
    income_type = (
        ('1', 'salary'),
        ('2', 'loan'),
        ('2', 'other')
    )

    amount = models.DecimalField(
        decimal_places=4, max_digits=11)
    type = models.CharField(max_length=1, choices=income_type)
    remarks = models.TextField()
    datetime = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    repay_amount = models.DecimalField(
        null=True,
        blank=True,
        decimal_places=4,
        max_digits=11)


class Expenses(models.Model):
    expenses_type = (
        ('1', 'repay'),
        ('2', 'consumption'),
        ('3', 'other'),
        ('4', 'repay')
    )

    amount = models.DecimalField(
        decimal_places=4, max_digits=11)
    type = models.CharField(choices=expenses_type, max_length=1)
    remarks = models.TextField()
    datetime = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    expenditure = models.BooleanField(default=False)
