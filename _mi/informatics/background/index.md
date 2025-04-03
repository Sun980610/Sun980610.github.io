---
title: "Bio-informatics Background"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/informatics/background/
---

{% assign docs1 = site.mi | where: "categories", "informatics" %}
{% assign docs2 = docs1 | where: "categories", "background" %}

<ul>
  {% for doc in docs2 %}
    {% unless doc.url contains 'index' %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
