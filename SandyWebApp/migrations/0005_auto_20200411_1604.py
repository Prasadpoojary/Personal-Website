# Generated by Django 3.0.5 on 2020-04-11 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SandyWebApp', '0004_auto_20200411_1451'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='Project_detail',
            field=models.TextField(max_length=60),
        ),
        migrations.AlterField(
            model_name='review',
            name='Review_time',
            field=models.DateTimeField(),
        ),
    ]
