# Generated by Django 4.1.5 on 2023-02-03 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dishes', '0002_alter_dish_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dish',
            name='image',
            field=models.URLField(max_length=256),
        ),
    ]