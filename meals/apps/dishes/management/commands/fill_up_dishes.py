import logging
import requests
from quantulum3 import parser

from django.core.management import BaseCommand
from apps.dishes.models import Dish, DishProduct
from apps.products.models import Product

logger = logging.getLogger('app_api')


class Command(BaseCommand):
    help = 'Get dishes from MealsDB'

    def handle(self, *args, **options):
        alphabet = 'abcdefghijklmnopqrstuvwxyz'

        for letter in alphabet:
            logger.info(f'Request letter {letter}')
            response = requests.get(f'https://www.themealdb.com/api/json/v1/1/search.php?f={letter}')

            response = response.json()['meals'] if response.json()['meals'] else []
            for data in response:
                name = data['strMeal']
                category = data['strCategory']
                image = data['strMealThumb']
                instructions = data['strInstructions']

                dish, created = Dish.objects.get_or_create(
                    name=name,
                    image=image,
                    category=category,
                    instructions=instructions
                )
                if created:
                    logger.info(f'{dish.name} was successfully created')
                else:
                    logger.info(f'{dish.name} is already exists')

                for i in range(1, 21):
                    product_name = data[f'strIngredient{i}']
                    if not product_name:
                        break
                    measure = data[f'strMeasure{i}']
                    parse_measure = parser.parse(measure)
                    if not parse_measure:
                        quantity, measurement = None, 'to serve'
                    else:
                        quantity, measurement = parse_measure[0].value, parse_measure[0].unit

                    product = Product.objects.filter(name__iexact=product_name).first()
                    if not product:
                        continue
                    product.measurement = measurement
                    product.save(update_fields=['measurement'])
                    logger.info(f'Set measurement for {product.name} as {product.measurement}')

                    dish_product = DishProduct.objects.create(
                        dish=dish,
                        product=product,
                        quantity=quantity
                    )
                    logger.info(f'Create: {dish_product.dish.name}, {dish_product.product.name}, {dish_product.quantity}')

        logger.info('Done.')
