# Generated by Django 3.0.5 on 2020-04-11 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pnum', models.IntegerField()),
                ('pname', models.CharField(max_length=30)),
                ('pdetail', models.CharField(max_length=100)),
                ('ptech', models.CharField(max_length=100)),
                ('plink', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rtime', models.DateTimeField(auto_created=True)),
                ('rcontent', models.TextField(max_length=200)),
                ('rname', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('snum', models.IntegerField()),
                ('sname', models.CharField(max_length=100)),
                ('spercent', models.IntegerField()),
            ],
        ),
    ]
