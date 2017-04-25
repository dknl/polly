from django.conf.urls import url, include
from .viewsets import QuestionViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'questions', QuestionViewSet)

urlpatterns = [
  url(r'^', include(router.urls)),
]
