from .models import Question, Choice

from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import serializers, viewsets, renderers
from rest_framework.decorators import list_route, detail_route

# serializers

class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ('id', 'text', 'votes')

class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True, read_only=True)
    class Meta:
        model = Question
        fields = ('id', 'text','pub_date','choices')

# viewsets
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class ChoiceViewSet(viewsets.ModelViewSet):

    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer
    renderer_classes = (JSONRenderer, )

    @detail_route(methods=['post'])
    def vote(self, request, pk=None):

        choice = Choice.objects.get(pk=pk)
        choice.votes += 1
        choice.save()

        import pdb; pdb.set_trace();

        res = {'choice': choice}
        return Response(res)
