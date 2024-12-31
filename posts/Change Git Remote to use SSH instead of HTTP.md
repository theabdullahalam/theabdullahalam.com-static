---
title: Change Git Remote to use SSH instead of HTTP
tags: ["post", "guides", "dev"]
layout: post
permalink: "/post/{{ title | slugify }}/"
date: 2022-08-30
---
Steps to change the way git accesses the remote, from HTTPS to SSH. This
is enforced by default lately, but is useful for migrating old projects
that have already been set up.

**List your existing remotes in order to get the name of the remote you
want to change.**

``` bash
$ git remote -v
origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
origin  https://github.com/USERNAME/REPOSITORY.git (push)
```

**Change your remote's URL from HTTPS to SSH with the git remote set-url
command.**

``` bash
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

**Verify that the remote URL has changed.**

``` bash
$ git remote -v
origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
origin  git@github.com:USERNAME/REPOSITORY.git (push)
```
