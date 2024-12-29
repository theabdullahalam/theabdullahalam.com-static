---
title: Linux Cheatsheet
tags: ["post", "cheatsheets", "linux", "dev"]
layout: post
permalink: "/post/{{ title | slugify }}/"
date: 2022-08-30
---
An ever-growing collection of linux shell commands I keep revisiting.

## open a shell inside docker

``` bash
sudo docker exec -it CONTAINER_ID /bin/bash
```

## ports in use

Check what is running at a particular port (Eg 8080)

``` bash
lsof -i :8080
```

## wget

Regular download

``` bash
wget <url> -O <destination>
```

Quieter download

``` bash
wget <url> -O <destination> -q --show-progress
```

## gnome wallpaper

To set a wallpaper in gnome. Note: `picture-uri` for light mode and
`picture-uri-dark` for dark mode.

``` bash
gsettings set org.gnome.desktop.background picture-uri-dark {uri}
```

## rsync

``` bash
# simple sync
rsync -avh --progress /path/to/source /path/to/destination

# sync with compression; useful for large files
# not good for large quantity of files
rsync -azzvh --progress /path/to/source /path/to/destination

# ignore folder
rsync -avh --progress /path/to/source /path/to/destination --exclude /folder/to/ignore
```

## dual boot EFI fix

Sometimes, after dual-booting linux using systemd as the bootloader, the
machine still boots to Windows by default. To fix this, run the
following command in **Windows Powershell** as administrator:

``` bat
bcdedit /set "{bootmgr}" path "\EFI\systemd\systemd-bootx64.efi"
```

## chromium based apps: libva error

Uninstall `libva-vdpau-driver`

## install pip requirements one by one

Install pip requirements line by line so as to not not install anything
if just one package fails.

``` bash
cat requirements.txt | xargs -n 1 pip install
```