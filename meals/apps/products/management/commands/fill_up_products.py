import logging
import requests

from django.core.management import BaseCommand

from apps.products.models import Product

logger = logging.getLogger('app_api')


class Command(BaseCommand):
    help = 'Get products from MealsDB'

    def handle(self, *args, **options):
        response = requests.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        for data in response.json().get('meals', []):
            product, created = Product.objects.get_or_create(
                name=data['strIngredient'],
                description=data['strDescription']
            )

            if created:
                logger.info(f'{product.name} was successfully created')
            else:
                logger.info(f'{product.name} is already exists')

        logger.info('Done')
