---
title: "Statistics Basic R"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/statistics/basicR/
---

{% assign docs1 = site.mi | where: "categories", "statistics" %}
{% assign docs2 = docs1 | where: "categories", "basicR" %}

<ul>
  {% for doc in docs2 %}
    {% unless doc.url contains 'index' %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
