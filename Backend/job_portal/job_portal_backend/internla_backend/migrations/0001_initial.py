# Generated by Django 5.0.1 on 2024-01-28 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Jobs',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('job_title', models.CharField(max_length=255)),
                ('job_category', models.CharField(max_length=255)),
                ('despription', models.CharField(max_length=500)),
                ('is_available', models.BooleanField(default=True)),
            ],
        ),
    ]