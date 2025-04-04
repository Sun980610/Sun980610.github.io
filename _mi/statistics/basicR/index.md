---
title: "Statistics Basic R"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/statistics/basicR/
---

{% assign docs1 = site.mi | where: "categories", "statistics" %}
{% assign docs2 = docs1 | where: "categories", "basicR" %}
{% assign sorted_docs = docs2 | sort: "title" %}

<ul>
  {% for doc in sorted_docs2 %}
    {% unless doc.url contains 'index' %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
