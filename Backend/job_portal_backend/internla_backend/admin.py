from django.contrib import admin
from internla_backend.models import jobs
from internla_backend.models import jobseeker 

models_list=[jobs]
admin.site.register(models_list)


# Register your models here.
