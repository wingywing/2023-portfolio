---
tags:
    - design
    - code
title: Special thanks to the indieweb for motivating this website
date: 2024-04-24T01:55:47.582Z
layout: writing/blogpost.njk
slug: special-indieweb-motivating-website
---

<!-- After my art account (which I’ve kept running since 2016) got deleted by Instagram at the beginning of this year, I was determined not to make posts on social media again.

I felt like that particular art account held a lot of sentimental value for me since it traced my growth in drawing from my high school days. A lot of the drawings (albeit embarrassing) weren’t stored anywhere else. It felt like a time capsule that got thrown away.

I do miss being able to share my drawings with friends and family though, and it got me thinking that I should create a platform of my own, where the content is mine alone. -->

Recently, I came across the [IndieWeb movement](https://indieweb.org/) after hopping through rabbit-holes on the internet and thought ‘neat!’. It was exactly what I was looking for! A way to feel connected to people and share my own creations.

I’m still starting out at coding but seeing [IndieWeb Standards](https://spec.indieweb.org/) like webmentions fired up that 10-year old inside me who loved reading through random how-to guides and videos to learn and create things that are uniquely mine.

And so, while I put off re-designing and re-coding my website for a very long time, I finally did it! For now, I've produce a MVP that allows me to show off my designs abd illustrations. I'm still figuring out how to implement webmentions, but I'll get there in due time.

Coding this site has been a really fun journey. I opted to go for [11ty](https://11ty.dev/) as the framework due to its speedy loading times and great performance. I've also already done some projects with Hugo ([my first web project](https://bomby.neocities.org/)) and React before and wanted to get my hands dirty with something new!

Some difficulties when working with 11ty moving from React was that reusable components are finnicky and a bit hacky to create. I ended up using macros and includes to make something similar to how React components work. The approach was similar to [this](https://www.trysmudford.com/blog/encapsulated-11ty-components/).

I loved whenever things worked out though, even though a lot of experimentation was needed. [You can view the source code for this project here on my Github](https://github.com/wingywing/2023-portfolio)... and the [Figma designs here](https://www.figma.com/file/OyD8DQSqoJTtcu1VjJJw6O/2023-Portfolio?type=design&node-id=0%3A1&mode=design&t=Qfwa8iMbu6RW6J0r-1).

<br/>

For this website, I used:
- [11ty](https://11ty.dev/) – static website generation
- [Figma](https://figma.com/) – design
- [GSAP](https://gsap.com/) – javascript animation library
- [LightGallery](https://www.lightgalleryjs.com/) – opensource javascript image lightbox library (free for projects under GPL-3.0 license)
- [Netlify](https://www.netlify.com/) – build and deploy
- [PyxelEdit](https://pyxeledit.com/index.php) – pixel art just for the slime with a wing
- [Pixelarticons](https://pixelarticons.com/) by Halfmage – open source pixel icon library
- [SASS/SCSS](https://sass-lang.com/) – stylesheets