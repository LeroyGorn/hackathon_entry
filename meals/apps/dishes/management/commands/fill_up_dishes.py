import logging
import requests

from django.core.management import BaseCommand
from django.core.files import File
from apps.dishes.models import Dish, DishProduct

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

        logger.info('Done.')
