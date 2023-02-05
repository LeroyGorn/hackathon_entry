from django.db import models


class Dish(models.Model):
    class CategoryChoice(models.TextChoices):
        beef = 'Beef', 'Beef'
        breakfast = 'Breakfast', 'Breakfast'
        chicken = 'Chicken', 'Chicken'
        dessert = 'Dessert', 'Dessert'
        goat = 'Goat', 'Goat'
        lamb = 'Lamb', 'Lamb'
        miscellaneous = 'Miscellaneous', 'Miscellaneous'
        pasta = 'Pasta', 'Pasta'
        pork = 'Pork', 'Pork'
        seafood = 'Seafood', 'Seafood'
        side = 'Side', 'Side'
        starter = 'Starter', 'Starter'
        vegan = 'Vegan', 'Vegan'
        vegetarian = 'Vegetarian', 'Vegetarian'

    name = models.CharField(
        max_length=64
    )

    image = models.URLField(max_length=256)

    category = models.CharField(
        max_length=16,
        choices=CategoryChoice.choices
    )

    instructions = models.TextField(
        blank=True, null=True
    )

    class Meta:
        verbose_name = 'Dish'
        verbose_name_plural = 'Dishes'

    def __str__(self):
        return self.name


class DishProduct(models.Model):
    dish = models.ForeignKey(
        to='dishes.Dish',
        on_delete=models.CASCADE,
        related_name='products'
    )

    product = models.ForeignKey(
        to='products.Product',
        on_delete=models.CASCADE,
        related_name='dishes'
    )

    quantity = models.FloatField(
        blank=True, null=True
    )

    def __str__(self):
        return f'{self.dish} {self.product}'
