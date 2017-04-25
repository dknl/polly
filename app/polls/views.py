from .models import Question, Choice
from rest_framework import serializers, viewsets

# serializers
class QuestionSerializer(serializers.ModelSerializer):
    choices = serializers.StringRelatedField(many=True)
    class Meta:
        model = Question
        fields = ('id', 'text','pub_date','choices')

# viewsets
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
