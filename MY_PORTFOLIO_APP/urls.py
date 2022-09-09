from django.urls import path
from MY_PORTFOLIO_APP import views

urlpatterns = [
    path('', views.intro, name='intro'),
    path('blogs/', views.blogs, name='blogs'),
    path('feedback/', views.feedback, name='feedback'),
    path('projects/', views.projects, name='projects')
]
