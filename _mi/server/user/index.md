---
title: "Server User"
layout: single
sidebar:
  nav: "category-nav"
permalink: /mi/server/user/
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
![image](https://github.com/user-attachments/assets/f608482b-fe1f-488b-b457-c4fc94925ce6)
