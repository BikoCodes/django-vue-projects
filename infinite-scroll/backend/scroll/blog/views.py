from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from .models import Post
from .serializers import PostSerilizer


@api_view(['GET'])
def posts(request):
    posts = Post.objects.all()
    paginator = PageNumberPagination()
    paginator.page_size = 3
    results = paginator.paginate_queryset(posts, request)
       
    serializer = PostSerilizer(results, many=True)

    return paginator.get_paginated_response(serializer.data)

