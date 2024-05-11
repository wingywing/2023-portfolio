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

<div class="lightgallery">
    <a href="/assets/img/2024-05-11-screenshot.jpg">
        <figure>
            <img src="/assets/img/2024-05-11-screenshot.jpg" alt="Screenshot of what the CMS looks like in the process of writing this post." />
            <figcaption>Screenshot of what the CMS looks like in the process of writing this post.</figcaption>
        </figure>
    </a>
</div>

## Why use a CMS?

Before I integrated DecapCMS into this site, making or editing posts was really clunky. Since this is a statically generated website built on [11ty](https://11ty.dev/), every time I wanted to make changes, I had to manually edit a markdown file on [my website's Github Repo](https://github.com/wingywing/2023-portfolio) and push it up. Thanks to Netlify, the website automatically redeploys after a change is merged into the main branch, but this made it very difficult to post from my phone or iPad. It's also much less visual (even with the really cool [Frontmatter CMS plugin](frontmatter.codes) for VSCode) compared to DecapCMS, which has a beautiful rich text editor. It also helps to keep my files neat and tidy...

<div class="lightgallery">
    <a href="/assets/img/2024-05-11-screenshot-2.jpg">
        <figure>
            <img src="/assets/img/2024-05-11-screenshot-2.jpg" alt="Screenshot of my very pink VSCode setup with the Frontmatter CMS plugin." />
            <figcaption>Screenshot of my very pink VSCode setup with the Frontmatter CMS plugin.</figcaption>
        </figure>
    </a>
</div>

## Why use DecapCMS?

Since I was already using Netlify to host and deploy my website, DecapCMS was the easiest solution to integrate for my use case! DecapCMS was originally known as NetlifyCMS and is perfectly integrated with the Netlify client and Github. It also allows me to use authentication from Netlify as well – you can check out the [login page here,](https://wingpang.com/admin/#/) which has Github authentication too.

The tutorial below was really helpful in getting it set up:

https://www.youtube.com/watch?v=4wD00RT6d-g

## Conclusion

There are still some areas that I can improve in for the writing/publishing process... Specifically, I'd like to create a custom Netlify CMS widget that can replace the default image widget for use with [LightGallery](lightgalleryjs.com/). Right now, I still have to copy and paste in the HTML markup for my image lightboxes to appear (not ideal!).

That's it for now! Thanks for listening to this ramble.
