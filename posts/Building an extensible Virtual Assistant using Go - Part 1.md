---
title: Building an extensible Virtual Assistant using Go - Part 1
tags: ["dev", "golang"]
layout: post
permalink: "/post/{{ title | slugify }}/"
date: 2024-12-30
---
First thing's first, setting up the project. As it turns out, `golang` is rather unopinionated on how things should be set up. But I did find a couple of guidelines online on how packages, files (and modules, which are different) should be set up. Project setups are a tricky subject any ways, and in my experience the structure changes over time to fit your needs, and you can find your own preferences change after years, so, I followed some of those guidelines and just dived in.

This is how I chose to start:
```bash
.
├── cmd
│   ├── ava
│   │   └── ava.go
│   └── ava-cli
│       └── ava-cli.go
└── go.mod
```

I envision the project to have an program that runs in the background and acts like "Ava", and a cli program for now, to chat with Ava. The common practice for projects that will have multiple commands or entrypoints that will give different final binaries is to give them all their own package.

Let's build the chat in `ava-cli.go`

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {

	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("\nAva Chat\n----------\n")

	for {
		fmt.Printf("You: ")
		user_message, err := reader.ReadString('\n')
		if err != nil {
			fmt.Println(err)
			return
		}

		
		if user_message == "\n" {
			continue
		}
		
		
		if user_message == "\\q\n" {
			break
		}
		
		user_message = user_message[:len(user_message)-1]
		fmt.Printf("Ava: You said,\"%s\"\n", user_message)
	}

	fmt.Printf("\n")

}
```

Right away, taking text from the CLI standard input feels a little clunky, but I think I am spoilt a little by python's `input()` function. Surprised to not see a helper for it, but I guess this is what you get when using a language that's closer to metal.