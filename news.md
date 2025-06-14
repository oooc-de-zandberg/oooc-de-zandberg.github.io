---
layout: page
title: Nieuws
permalink: /news/
---

## Laatste nieuws en updates

Blijf op de hoogte van het laatste nieuws, evenementen en aankondigingen van OOOC De Zandberg.

<div class="news-section">
  <ul class="post-list">
    {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%d-%m-%Y" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h3>
      {{ post.excerpt }}
      <a href="{{ post.url | relative_url }}" class="read-more">Lees meer →</a>
    </li>
    {% endfor %}
  </ul>
</div>

## Abonneer op updates

Wil je onze nieuwsbrief ontvangen met de laatste updates? Neem dan [contact met ons op](/contact) om je aan te melden voor onze mailinglijst.
