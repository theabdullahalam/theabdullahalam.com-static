---
title: Building an extensible Virtual Assistant using Go - Part 0
tags: ["post", "dev", "golang"]
layout: post
permalink: "/post/{{ title | slugify }}/"
---
It's been a while since I learnt a new programming language, but recently, golang caught my attention. The idea of a C-style relatively lower level language that is easy to compile and run on any platform, that builds to a single binary that can be deployed anywhere, sounds quite appealing. 

So, to learn this language, I am picking up a project I've been meaning to build for the longest time, and finally make it using **go.** It is a project that involves networking, http servers, reading/writing to files, etc. Depending on how the project goes, I might also have to use an sqlite database. All in all, it should give me a good understanding of the language and a (mostly) finished project at the end. 

> *Note: This series is not a detailed tutorial. It is a literal coding blog - a blog about the processes going behind learning a new language by building a huge project with it. I already have experience with other languages, so I know what to look for and where. In this series I will document my process and my thoughts on the different things I learn on the way.*

## So what are we building?

A virtual assistant using go. Goals:

- Omnipresent: I should be able to interact with any of my devices and the assistant should feel like it lives across devices, like jarvis.
- Decentralized: Every device should work regardless of the rest of them being online. No central server.
- Modular: Different devices can have different things the assistant can do, and communicating with the assistant through any device should allow it to do anything on any device appropriately. These can be scripts on desktops/servers, Tasker actions on Android.
- Self hostable: Whatever hosted services the assistant needs (messaging protocols, LLMs) should be self-hostable, so the stack isn't dependent on a single major company.
- Open source: this can be a product that the community build on, contributes to, and is transparent and free to use for everyone. 

## Name?
Since there is no shortage of virtual assistants out there, this one is going to just be **Another Virtual Assistant,** or, **Ava.**

## Start Here
- [[Building an extensible Virtual Assistant using Go - Part 1]]
