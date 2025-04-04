---
title: "Bio-informatics Multi-omics Integration"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/informatics/multiomics/
---

{% assign docs1 = site.mi | where: "categories", "informatics" %}
{% assign docs2 = docs1 | where: "categories", "multiomics" %}
{% assign sorted_docs = docs2 | sort: "title" %}

<ul>
  {% for doc in sorted_docs2 %}
    {% unless doc.url contains 'index' %}
      <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
