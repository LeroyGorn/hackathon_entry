from django.db import models


class Product(models.Model):
    name = models.CharField(
        max_length=64
    )

    description = models.CharField(
        max_length=1000,
        null=True, blank=True
    )

    def __str__(self):
        return self.name


class UserProduct(models.Model):
    user = models.ForeignKey(
        to='auth_user.CustomUser',
        on_delete=models.CASCADE
    )

    product = models.ForeignKey(
        to='products.Product',
        on_delete=models.CASCADE
    )

    quantity = models.PositiveSmallIntegerField()

    class Meta:
        unique_together = ('user', 'product', )

    def __str__(self):
        return f'{self.user}: {self.product}'
