---
layout: page
title: writing // speaking
permalink: /writing-speaking/
---

<div class="page--communicate">
  <img class="page__img page__img--writing" src="/assets/img/writing.jpg">
  <div class="page__section">
    <h2 class="page__section-title">Writing</h2>
    <p>I enjoy writing about front end technology and how to transition to the field as a career changer. Check back here for more or follow me on <a href="https://medium.com/@adriennemcd" target="_blank">Medium!</a></p>
    <div class="page__blog">
    {% for post in site.categories['blog'] %}
        <div class="page__blog-item">
          <h4 class="page__blog-item-title">
            <a class="page__blog-item-link" href="{{ post.link }}" target="_blank">{{ post.title }}</a>
          </h4>

          <p class="page__blog-item-date">{{ post.date | date: "%B %Y" }} - {{ post.source }}</p>
          <p class="page__blog-item-descrip">{{ post.descrip }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
  <div class="page__section">
    <h2 class="page__section-title">Speaking</h2>
    <p>I've had the wonderful opportunity to speak on a handful of panels about being a woman in tech and a career changer. It is a joy to talk to people who are just entering the field.</p>
    <div class="page__event">
    {% for post in site.categories['speak'] %}
        <div class="page__event-item">
          <h4 class="page__event-item-title">
            {% if post.link == 'blank' %}
              {{ post.title }}
            {% else %}
              <a class="page__event-item-link" href="{{ post.link }}" target="_blank">{{ post.title }}</a>
            {% endif %}
          </h4>
          <p class="page__event-item-date">{{ post.date | date: "%d %b %Y, %I:%M %p" }}</p>
          <p class="page__event-item-date">{{ post.location }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
 
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/masonry/3.3.2/masonry.pkgd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.2.0/imagesloaded.pkgd.min.js"></script>
<script src="/js/index.js"></script>

