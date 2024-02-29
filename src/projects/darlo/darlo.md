---
layout: project/project.njk
tags: project
title: Darlinghurst Liverpool Street Web Project
role: Webdesign, Html, SASS, Hugo
projecttype: Collaboration
year: 2023
duration: 6 months (part-time)
link: https://darlostories.au
award: Macquarie-PHA Applied History Award
description: Web design for a historical project about Darlinghurst
date: 2024-02-29T04:48:49.212Z
preview: /projects/darlo/LiverpoolStMapVideo.mp4
categories:
    - case-study
---

<div class="project-header">
    <div class="project-banner">
        <video autoplay loop muted>
            <source src="/projects/darlo/LiverpoolStMapVideo.mp4" type="video/mp4">
        </video>
    </div>
    <div class="information">
        <h1>{{ title }}</h1>
        <div class="details">
            <span>{{ role }}</span>
            <span>•</span>
            <span>{{ projecttype }}</span>   
            <span>•</span>
            <span>{{ year }}</span>   
            <span>•</span>
            <span>{{ duration }}</span>
        </div>
        <a href="{{ link }}">{{ link }}</a>
        <div class="award-badge">{{ award }}</div>
    </div>
</div>

A visual web project representing historical data mapping the changes of Darlinghurst’s Liverpool Street.
<br/>

## Contents
1. [The team](#1.-the-team)
2. [The brief](#2.-the-brief)
3. [The problem](#3.-the-problem)
4. [Solving the problem](#4.-solving-the-problem)
5. [Design process](#5.-design-process)
6. [Challenges](#6.-challenges)
7. [Learnings](#7.-learnings)


## 1. The team
| Human | Role |
|:-- |:--|
| [Nicole&nbsp;Cama](https://nicolecama.com.au) | Project Lead – professional historian specialising in public history who led this project, provided archival images and conducted the all the historical research for this project |
| [Nick&nbsp;Clark](https://clarx.dev/) | Software Engineer – created the site from the ground-up and provided the base for SASS styling |
| Me! | Lead Designer – digitising archival maps, graphic and web design, and SASS styling site-wide |

## 2. The brief
From the first briefing email, Nicole provided me with a clear outline and attached a detailed brief along with some images for the vibe of the site:
> ...a **data visualisation project** mapping the people and structures of Liverpool Street, Darlinghurst based on a particular historical source dating **from 1845 to 1948**. [...] a website which will creatively illustrate the data from this source **using graphics, media and other interactive strategies**.
<br/>
## 3. The problem
> “How can we visualise a whole century of historical data for a modern, general audience?”
1. How can we avoid information fatigue?
2. How do we tie together information from separate time periods?
3. Can we incorporate archival images?
<br/>

## 4. Solving the problem
We started off the design process with some **mood-boards and brainstorming**. Below is a mood-board that Nicole had included in the project brief, which had some archival images that set the tone of how the project might look and feel. These images are in the public domain and some were used as visual assets in the final project.

![Screenshot of the moodboard sent to me by [Nicole&nbsp;Cama](https://nicolecama.com.au)](/projects/darlo/01.jpg "Screenshot of the moodboard sent to me by Nicole.")

### Avoiding information fatigue
To avoid information fatigue, data is visualised in an interactive way, where users can click on ‘points of interest’ on a map to view stories that they’re interested in. 

![Screenshot of a focal point that has been clicked on.](/projects/darlo/02.png "Screenshot of a focal point that has been clicked on.")

### Tying information together from separate time periods
In the main map section of the project, users can flick through vectorised versions of archival maps from different time periods and compare the changes throughout Liverpool Street.

![Screenshot of the map from 1888 – notice how this map shows building composition!](/projects/darlo/03.png "Screenshot of the map from 1888 – notice how this map shows building composition!")

### Incorporating archival images
Archival images paid an important role in tying the project together visually. They also served as icons for data visualisation. Elevation technical diagrams where also used as a visual cue for what certain types of buildings may have looked like in the past. 

![The first two building plans only had line-art available, so I coloured and match the style of the third by hand. The question mark for Unknown was also illustrated by hand as a suitable image could not be found in the archive.](/projects/darlo/04.png "Screenshot of the data visualisation section with archival images. Two graphics are shown where one is showing different structure types on Liverpool St and the other shows the gender of landlords/rate payers in 1888.")

## 5. Design process
### Brainstorming
I brainstormed some initial ideas in a list format, but a lot of these ideas were changed throughout the project due to technical or usability reasons. **The process of design and iteration for this project was very agile and cyclical, targeting problems as they arose.**

Some initial ideas in the reply:
> - Vectorising/tracing and splitting the historical survey plan/map into different sections
> - One of the sections will feature the following:
> 	- Illustrations of different types of building on Liverpool St from a front-on perspective with colour coding + key for the various materials used in the original construction plans  
> - Thinking that in order to show the datasets in an interactive way, information can be overlapped on the aerial map of Liverpool St.
> - Similar to aerial view Google Maps, but information that’s overlapped changes depending on the “filter” the user selects
> 	- Filters might be the building fabric + gender proportions
> 		- Building fabric might be a toggle-able overlay on the map that colours the buildings depending on what it’s made of + a key that explains what each colour represents. I'll need a bit more clarification of what the dataset exactly includes, I think.  
> 		- Maybe gender proportion can be represented through pedestrian icons on the map, with a pie chart in the corner of the map for clarity
> 			- It would be interesting to have some of these icons be clickable to view stories of people with their portraits  
> - To show how the street transforms over time, maybe there could be a scrollable timeline where the user can see how the map changes depending on what year they’re on
> 	- A bit like this: [https://earthengine.google.com/timelapse/](https://earthengine.google.com/timelapse/) but at a smaller scale and with illustrations instead of satellite images  
> - The overall style of the project will use an ink-like illustration style with a sepia tone similar to the documents shown.

### Sketching
The initial sketches for the project looked very different to how the site looks now. These sketches had more reliance on overlays and popups, which ended up not being a good idea for the amount of information we ended up having. However, some aspects like the timeline and graphical style carried through.

![Initial sketches based on the brief provided by Nicole.](/projects/darlo/05.png "Initial sketches based on the brief provided by Nicole.")

### Iterations
The first iterations of the site was a single page site with only the map as focus. However, as the project's scope expanded, the designs were revisited to match the new content.

![Initial home page design.](/projects/darlo/06.png "Screenshot of the initial home page design.")

![Mobile responsive design with popup overlays.](/projects/darlo/07.png "Screenshot of the original mobile responsive design with popup overlays.")

Nicole and Nick implemented the Stories, Street Data and About pages, I helped with styling the Stories Pages using CSS in the front-end. The addition of these pages meant that a header was needed to bring the site pages together.

![Header design in Figma.](/projects/darlo/08.png "Screenshot of the header design in Figma.")

An alternative layout for the stories of Liverpool Street was also designed for the home page but wasn't implemented in the end. The icons of the stories were derived from archival images provided by Nicole. 
Some of the icons were hand-illustrated for consistency since there weren't any inked archival drawings available.

![Alternative tile layout for stories of Liverpool Street in the home page.](/projects/darlo/09.png "Screenshot of the alternative tile layout for stories of Liverpool Street in the home page.")

## 6. Challenges
### Tracing the maps
One of the biggest challenges in this project was vectorising existing archival images so that they could overlap and allow for easier visual comparison. 

It required piecing large scanned map images together in illustrator, and tracing buildings on the street by hand.

![Screenshot of the messy map-tracing process.](/projects/darlo/10.png "Screenshot of the messy map-tracing process.")

![The maps looked completely different from one another, so some adjustments had to be made while tracing.](/projects/darlo/11.png "Screenshot of the 1930s map, which is in black and white (rather than sepia-toned) and a lot cleaner than the maps from previous time periods.")

### Expanding scope and time management
Since the size of the project exceeded what I had originally thought it would be (a single webpage), time management became difficult as I juggled university, a part-time job, and other professional commitments.

This meant that some features that would’ve been nice to be implemented ran out of available time/budget for. (E.g. scroll animations, grain textures and page transitions). 

Nonetheless, I’m grateful to have been able to work on this project with the amazing Nicole Cama and Nick Clark.
<br/>
## 7. Learnings
### Sometimes, design is messy and non-linear
While we can do our best to work in an organised design process, sometimes things change during the project which will require us to adapt and think on the spot. 

For example, the implementation of the stories tab had a quick turnaround time, which meant that the blog format was already coded before designs were made. By using my knowledge in SASS and html, I was able to help style the site to look coherent efficiently.

### Communication is key
In the beginning of this project, a lot of the communication was done through email only. I found that once we were able to organise a time to call and talk the project through live, ideas started flying and we had a place to start our work.