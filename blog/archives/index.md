---
layout: default
title: Archives
permalink: /archives/
---
<h1>Archives</h1>
<ul>
  {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" | sort: "name" | reverse %}
  {% for year_group in posts_by_year %}
    <li>
      <strong>{{ year_group.name }}</strong>
      <ul>
        {% assign posts_by_month = year_group.items | group_by_exp: "post", "post.date | date: '%m'" | sort: "name" | reverse %}
        {% for month_group in posts_by_month %}
          {% assign month_num = month_group.name | plus: 0 %}
          <li>
            <a href="/{{ year_group.name }}/{{ month_num | prepend: '0' | slice: -2 }}/">
              {{ year_group.name }}-{{ month_num | prepend: '0' | slice: -2 }} ({{ month_group.items | size }})
            </a>
            <ul>
              {% assign posts_by_day = month_group.items | group_by_exp: "post", "post.date | date: '%d'" | sort: "name" | reverse %}
              {% for day_group in posts_by_day %}
                {% assign day_num = day_group.name | plus: 0 %}
                <li>
                  <a href="/{{ year_group.name }}/{{ month_num | prepend: '0' | slice: -2 }}/{{ day_num | prepend: '0' | slice: -2 }}/">
                    {{ year_group.name }}-{{ month_num | prepend: '0' | slice: -2 }}-{{ day_num | prepend: '0' | slice: -2 }} ({{ day_group.items | size }})
                  </a>
                </li>
              {% endfor %}
            </ul>
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>
