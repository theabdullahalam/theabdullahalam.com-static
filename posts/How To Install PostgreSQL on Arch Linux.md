---
title: How To Install PostgreSQL on Arch Linux
tags: ["post", "cheatsheets", "linux", "dev", "arch"]
layout: post
permalink: "/post/{{ title | slugify }}/"
date: 2022-08-30
---
The Arch Wiki is fantastic. However, some of the pages have this tendency to require the user to free-fall through links on other pages to ensure robust installations of things. In my experience, the `PostGreSQL` page is one such example.

Here is a simple guide on how to install PostgreSQL on Arch Linux.

# Install the package
Use `pacman` or your favorite package manager install the `postgresql` package:

```bash
sudo pacman -S postgresql
```

This will install PostgreSQL on your system, and create the `postgres` user.

# Initialize the database
Switch to the `postgres` user:
```bash
sudo su postgres
```

As the `postgres` user, run the following command to initialise the database cluster:
```bash
# this command must be run as the postgres user
initdb -D /var/lib/postgres/data
```

Switch back to your regular user:
```bash
# as the postgres user
exit
```

# Start and enable the postgresql service
```bash
systemctl start postgresql.service
systemctl enable postgresql.service
```

# Create a user
To create a user, you must switch back to the postgres user:
```bash
sudo su postgres
```

And now, you can create a user:
```bash
# as the postgres user
createuser --interactive
```

This will prompt you for a username and whether you wish the user to be a superuser. Answer as per your needs. If you name the user the same as your linux user, then you will be able to create databases and access the psql shell without having to switch to the `postgres` user first.

If you wish to set a password for your user, log in to to the psql shell:
```bash
# as the postgres user
psql
```

And in the psql shell, set the password for your user:
```sql
alter user <username> with encrypted password '<password>';
```

And now, you can press `Ctrl+D` to exit the psql shell and the postgres user shell, till you reach your own user shell.

# Creating a database
If your database user has the same name as your linux user:
```bash
# directly from your regular shell
createdb db_name
```

If your database user has a different name to your linux user:
```bash
# switch to the postgres user
sudo su postgres

# and create db
createdb db_name -O user_name
```

# Prevent updates from breaking your installation
If PostgreSQL updates to a newer major version, your existing database format will not work with it, and manual intervention is required for upgrading. To prevent accidentally updating PostgreSQL, open `/etc/pacman.conf`, and add `postgresql` to the `IgnorePkg` list:
```python
# /etc/pacman.conf
IgnorePkg=postgresql
```

