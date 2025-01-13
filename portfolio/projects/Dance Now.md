---
title: Dance Now
permalink: /portfolio/projects/{{ title | slugify }}/
layout: project
desktop_screenshot: /media/images/dancenow-desktop.png
---
During my time working as a dance instructor for an Arthur Murray studio in Ajax, I built an automatic event scheduling system.

Ballroom events are comprised of hundreds of "heats", which are short dance sessions in which multiple amateurs and professionals dance on the floor at the same time improvisationally to the same song. A big part of organizing these events is to combine the entries from many amateurs and professionals across various studios and alott them into heats throughought the day, building an event schedule out of it.

I built this system for the company, using Django for the backend, React for the front-end, Celery for the various database-intensive tasks; hosted on nginx on a VPS.