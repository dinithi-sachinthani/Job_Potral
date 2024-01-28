from django.urls import re_path as url 
from django.urls.resolvers import URLPattern
from .views import *
from django.urls import path
from internla_backend.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # path('',views.internla_backend,name='company'),
    path('jobs/',jobsAPI),
    path('student/<int:pk>/',jobsAPI)
]

