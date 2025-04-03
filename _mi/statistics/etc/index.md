---
title: "Statistics etc"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/statistics/etc/
---

{% assign docs1 = site.mi | where: "categories", "server" %}
{% assign docs2 = docs1 | where: "categories", "troubleshooting" %}

<ul>
  {% for doc in docs2 %}
    {% unless doc.url contains 'index' %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
