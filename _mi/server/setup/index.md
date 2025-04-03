---
title: "Server Setup"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/server/setup/
---

{% assign docs1 = site.mi | where: "categories", "server" %}
{% assign docs2 = docs1 | where: "categories", "setup" %}

<ul>
  {% for doc in docs2 %}
    {% unless doc.url contains 'index' %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
