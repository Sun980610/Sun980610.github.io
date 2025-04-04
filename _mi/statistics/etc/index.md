---
title: "Statistics etc"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/statistics/etc/
---

{% assign docs1 = site.mi | where: "categories", "statistics" %}
{% assign docs2 = docs1 | where: "categories", "etc" %}
{% assign sorted_docs = docs2 | sort: "title" %}

<ul>
  {% for doc in sorted_docs2 %}
    {% unless doc.url contains 'index' %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
