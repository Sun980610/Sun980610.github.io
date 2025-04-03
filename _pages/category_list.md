---
title: "Category"
layout: single
permalink: /category_list/
---

{% for section in site.data.navigation.category-nav %}
### {{ section.title }}

<ul>
  {% for item in section.children %}
    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
