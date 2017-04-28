from django.conf.urls import url, include
from .views import QuestionViewSet, ChoiceViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'questions', QuestionViewSet)
router.register(r'choices', ChoiceViewSet)

urlpatterns = [
  url(r'^', include(router.urls)),
]
