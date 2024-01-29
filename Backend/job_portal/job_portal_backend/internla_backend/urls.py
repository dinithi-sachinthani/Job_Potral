
from rest_framework import routers
from internla_backend import views
from django.urls import path,include

router= routers.DefaultRouter()

router.register('jobs',views.viewJobs,basename='internla_backend')
urlpatterns = [
    # path('',views.internla_backend,name='company'),
    # path('jobs/',jobsAPI),
    # path('student/<int:pk>/',jobsAPI),
    path('', include(router.urls))
]