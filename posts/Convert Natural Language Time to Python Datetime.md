---
title: Convert Natural Language Time to Python Datetime
tags: ["post", "python", "guides", "code"]
layout: post
permalink: "/post/{{ title | slugify }}/"
date: 2022-11-21
---

In a recent project of mine, I wanted to convert natural language
dates/times, like "next monday", "tomorrow night" or "five days from
now" to python `datetime` objects. My first thought was to look at NLP
libraries like `spaCy`, but `spaCy` does not have this feature. After
digging around a bit more, I stumbled across a library that is utterly
straightforward and works really well: `parsedatetime`. Here's how to
use it.

## Installation

Install the library using `pip`:

``` bash
pip install parsedatetime
```

## Usage

Import `parsedatetime` and instantiate it:

``` python
import parsedatetime
from datetime import datetime

cal = parsedatetime.Calendar()
time_struct, parse_status = cal.parse('next monday')
dt = datetime(*time_struct[:6])
# dt will contain next monday's date