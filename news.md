---
layout: page
title: News
permalink: /news/
---

## Latest News and Updates

Stay up-to-date with the latest news, events, and announcements from OOOC De Zandberg.

<div class="news-section">
  <ul class="post-list">
    {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h3>
      {{ post.excerpt }}
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </li>
    {% endfor %}
  </ul>
</div>

## Subscribe to Updates

To receive our newsletter with the latest updates, please [contact us](/contact) to be added to our mailing list.
