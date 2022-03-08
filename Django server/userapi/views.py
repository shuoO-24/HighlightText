import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from userapi import models
from django.http import JsonResponse
from django.core import serializers

@require_http_methods(["GET"])
def index(request):
    response = {}
    response['msg'] = 'success'
    response['code'] = 200
    return JsonResponse(response)
    
# 获取全部记录
@require_http_methods(["GET"])
def records(request):
    data = models.userAction.objects.all()
    print(data)
    result = serializers.serialize("json", data)
    response = {}
    response['msg'] = 'success'
    response['data'] = result
    response['code'] = 200
    return JsonResponse(response, json_dumps_params={'ensure_ascii': False}, content_type='application/json; charset=utf-8')

@require_http_methods(["POST"])
def create(request):
    data = json.loads(request.body)
    print(data)
    print(data['selectedText'])
    models.userAction.objects.create(
        selectedText = data['selectedText'],
        inputText = data['inputText'],
    )
    response = {}
    response['msg'] = 'success'
    response['code'] = 200
    return JsonResponse(response, json_dumps_params={'ensure_ascii': False}, content_type='application/json; charset=utf-8')
