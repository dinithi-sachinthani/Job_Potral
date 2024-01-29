<<<<<<< Updated upstream
from . import views
from django.urls import path
=======
from django.urls import re_path as url 
from django.urls.resolvers import URLPattern
from .views import *

from django.urls import path,include
from internla_backend.urls import path
from django.conf.urls.static import static
from django.conf import settings
from internla_backend import views
from rest_framework import routers

router= routers.DefaultRouter()

# router.register('jobs',views.viewJobs,basename='internla_backend')


urlpatterns = [
    # path('',views.internla_backend,name='company'),
    path('jobs/',jobsAPI),
    path('student/<int:pk>/',jobsAPI),
    path('', include(router.urls))
]
>>>>>>> Stashed changes

