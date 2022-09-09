from django.shortcuts import render


def intro(request):
    return render(request, 'intro.html')


def blogs(request):
    return render(request, 'blogs.html')


def projects(request):
    return render(request, 'projects.html')


def feedback(request):
    return render(request, 'feedback.html')
