---
title: "Server Troubleshooting"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/server/troubleshooting/
---

{% assign docs1 = site.mi | where: "categories", "server" %}
{% assign docs2 = docs1 | where: "categories", "troubleshooting" %}
{% assign sorted_docs = docs2 | sort: "title" %}

<ul>
  {% for doc in sorted_docs %}
    {% unless doc.url contains 'index' %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
