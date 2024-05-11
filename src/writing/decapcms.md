---
title: DecapCMS
description: Ramble about integrating DecapCMS into this website
date: 2024-05-11T22:51:00.000Z
externalLink: ""
tags:
  - code
  - webdev
---
Recently, I implemented DecapCMS into this website. It's been a complete game-changer to how easily I can create and publish pieces to this writing page! Essentially, it has allowed me to write and edit on the go, without having to use a code editor like I had to before.



## What is a CMS?

CMS is short for Content Management System.

According to [IBM](https://www.ibm.com/topics/content-management-system):

> A content management system (CMS) is software that helps users create, manage, store, and modify their digital content. This all-encompassing system is a one-stop-shop to store content—such as apps, images, and websites—in a user-friendly interface that is customizable to an organization’s needs and their employees.

To put it visually, it is the interface you see if you've ever used a blogging platform like Blogger or Wordpress!

![Screenshot of what the CMS looks like in the process of writing this post](/assets/img/2024-05-11-screenshot.jpg "Screenshot of what the CMS looks like in the process of writing this post")

## Why use a CMS?

Before I integrated DecapCMS into this site, making or editing posts was really clunky. Since this is a statically generated website built on [11ty](https://11ty.dev/), every time I wanted to make changes, I had to manually edit a markdown file on [my website's Github Repo](https://github.com/wingywing/2023-portfolio) and push it up. Thanks to Netlify, the website automatically redeploys after a change is merged into the main branch, but this made it very difficult to post from my phone or iPad. It's also much less visual (even with the really cool [Frontmatter CMS plugin](frontmatter.codes) for VSCode) compared to DecapCMS, which has a beautiful rich text editor.

![Screenshot of my very pink VSCode setup with the Frontmatter CMS plugin](/assets/img/2024-05-11-screenshot-2.jpg "Screenshot of my very pink VSCode setup with the Frontmatter CMS plugin")
