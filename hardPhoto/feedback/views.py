from django.shortcuts import render, redirect

from feedback.forms import AddPostForm
from feedback.models import Comment


def feed(request):
    if request.method == "POST":
        form = AddPostForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("feedback")

    else:
        form = AddPostForm()


    comm = Comment.objects.all()

    data = {
        "form": form,
        "comm": comm,
    }


    return render(request, 'feedback/feed.html', data)