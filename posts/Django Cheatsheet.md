---
title: Django Cheatsheet
tags: ["post", "python", "django", "guides", "dev", "cheatsheets"]
layout: post
permalink: "/post/{{ title | slugify }}/"
date: 2022-11-19
---
A cheatsheet for commonly used Django snippets.

## Override *save()* in models

``` python
def save(self, *args, **kwargs):
    super(ModelClass, self).save(*args, **kwargs)
```

## Timezone Aware datetime

``` python
from django.utils import timezone

# UTC
timezone.now()

# In current timezone
timezone.localtime()
```

## String join lists in Django Template

``` jinja2
{{ var_list|join:", " }}
```

## Aggregation

``` python
from django.db.models import Avg, Max, Sum

# number of items
MyModel.objects.all().count()

# sum
# get the sum of all the 'total_amount' values of the MyModel object
amount_sum = MyModel.objects.all().aggregate(Sum("total_amount"))
val = amount_sum["total_amount__sum"]
```

## Pass data from view to serializer (Django DRF)

In your APIView in `views.py`:

``` python
# override
def get_serializer_context(self):
    context = super().get_serializer_context()
    context.update({"request": self.request})
    context.update({"myvalue": self.kwargs["my_url_kwarg"]})
    # self.kwargs["my_url_kwarg"] is just an example for a common use case
    # you can pass anything here
    return context
```

In the corresponding serializer in `serializers.py`:

``` python
addr = self.context.get('myvalue', None)
```