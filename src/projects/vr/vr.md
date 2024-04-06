---
layout: project/project.njk
tags: project
title: Victorian Reports Overhaul
role: UI, UX, SASS, React
projecttype: In-house
year: 2022
duration: Implementation phase
description: The Victorian Reports website is a digital publishing platform for the Council of Law Reporting in Victoria. This project aims to overhaul the Victorian Reports' website with a focus on **enhancing the end-to-end user experience**.
date: 2024-03-29T05:01:04.167Z
preview:
categories:
    - case-study
---

<div class="project-header">
    <div class="project-banner">
        <img src="/projects/vr/vr-banner.png"/>
        <!-- <video autoplay loop muted>
            <source src="" type="video/mp4">
        </video> -->
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
    </div>
</div>

*We acknowledge the Aboriginal people as the Traditional Owners of this land, and pay our respects to Elders past and present. Working from Darug and Gadigal land.*

{{ description }}
<br/>

<div class="lightgallery inline-gallery">
    <a href="/projects/vr/00.png">
        <figure>
            <img src="/projects/vr/00.png" alt= "Redesigned homescreen"/>
            <figcaption> Redesigned homescreen
            </figcaption>
        </figure>
    </a>
</div>

## Contents
- [Special thanks](#special-thanks)
- [1. The team](#1.-the-team)
- [2. The problem](#2.-the-problem)
- [3. Solving the problem](#3.-solving-the-problem)
  - [Reflect](#reflect)
  - [Observe](#observe)
  - [Make](#make)
- [4. Final comments](#4.-final-comments)

## Special thanks
Thank you to the director of Open Law – [Michael Green SC](https://www.linkedin.com/in/michael-green-sc-42118b1/) for the opportunity to work on this project. I would also like to thank [Nick&nbsp;Clark](https://clarx.dev/) who showed me the ropes to Tailwind, SASS and taught me so much about frontend development with immense patience.

## 1. The team

| Human | Role |
|:-- |:--|
| [The&nbsp;Open&nbsp;Law&nbsp;Team](https://openlaw.com.au/) | The software development team are the ones who bring my designs to life. Can't do it without the team!|
| Me! | Lead Designer – completely overhauled the user interface from scratch using reusable components from my [UI Design System](/projects/openlaw/) to **enhance the end-to-end user experience**. <br/> </br> Assisted the frontend development team by developing a stylesheet framework and converting designs to code through **SASS and HTML**.|

## 2. The problem

> Updating the user interface design to have a more **modern look and feel** while **identifying painpoints in user experience**.

<!-- When I first started on the Victorian Reports redesign, my main goal was to identify **issues in accessibility and user flow** that can be improved upon for a better experience. At the same time, I also wanted to revitalise the interface to be more modern and consistent with the other redesigns I've been working on for the Open Law suite.

In order to achieve this, I **worked closely with the software development team and legal professionals within our organisation** to understand the technical and user needs of this product.

Currently, the redesigns for the Victorian Reports have been fully completed, and a majority of the frontend development have also been done. We are hoping to launch the redesign soon. -->


## 3. Solving the problem

This project was completed using a **lean-agile approach**, focusing on **how we can bring value to our customers** through iterative cycles and continuous feedback loops.

The infinity diagram below is adapted from the [IBM Enterprise Design Thinking Framework](https://www.ibm.com/design/thinking/page/toolkit).

<div class="lightgallery">
    <a href="/projects/vr/04.png">
        <figure>
            <img src="/projects/vr/04.png" alt= "The design infinity loop showing the endless process of observation, building and reflection."/>
            <figcaption> The design infinity loop showing the endless process of observation, building and making.
            </figcaption>
        </figure>
    </a>
</div>

Since the Victorian Reports website has been a long-standing platform available to users online, I **started the design process from reflecting on what we have so far**.

### Reflect
The existing Victorian Reports website had several **blockers in the user flow** that detracted from the overall user experience. 

#### Disruptive eCommerce flow
A cohesive and seamless eCommerce flow is essential to any digital product for bringing in monetary value for the business. 

The previous user flow of the Victorian Reports website required the user to **[recall rather than recognise](https://www.nngroup.com/articles/recognition-and-recall/)** what items they have already added to their cart, and how much money each item costed. The lack of information onscreen to help customers make informed purchase decisions contributes to the ****[ambiguity effect](https://onlinelibrary.wiley.com/doi/abs/10.1002/bdm.3960010303)****, which can decrease their feelings of trust towards the platform and lead to hesitiation to finalise purchases.

<div class="lightgallery">
    <a href="/projects/vr/05.png">
        <figure>
            <img src="/projects/vr/05.png" alt= "Screenshot of the original shop screen showing how much the user has spent, without what they have already added to the cart"/>
            <figcaption> Screenshot of the original shop screen showing how much the user has spent, without what they have already added to the cart </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/06.png">
    <figure>
        <img src="/projects/vr/06.png" alt= "Screenshot of the original single volume screen, which lacks a preview of selected volumes and a way to purchase multiple"/>
        <figcaption>Screenshot of the original single volume screen, which lacks a preview of selected volumes and a way to purchase multiple</figcaption>
    </figure>
</a>
</div>

#### Lack of adherence to the WCAG accessibility guidelines
Throughout the site, there were **areas that did not adhere to the WCAG AA accessibility guidelines**. Considering accessibility in design is crucial to allowing all users to access and interact with the website effectively in an inclusive way. 

<div class="lightgallery">
    <a href="/projects/vr/07.png">
        <figure>
            <img src="/projects/vr/07.png" alt= "Screenshot of the former homescreen design, which is difficult to read due to the background image and small text"/>
            <figcaption> Screenshot of the former homescreen design, which is difficult to read due to the background image and small text </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/08.png">
        <figure>
            <img src="/projects/vr/08.png" alt= "Screenshot of title text (in beige) in the former design, which fails the WCAG colour contrast test"/>
            <figcaption>Screenshot of title text in the former design, which fails the WCAG colour contrast test</figcaption>
        </figure>
    </a>
</div>

#### Inconsistencies in design
[**Consistency and standards**](https://www.nngroup.com/articles/consistency-and-standards/) is a design heuristic crucial to the feeling of seamlessness in user experience. Inconsistent styling of elements like buttons can detract from brand uniformity.

<div class="lightgallery">
    <a href="/projects/vr/09.png">
        <figure>
            <img src="/projects/vr/09.png" alt= "Image of browsing selectors for browse by catchwords and browse by name. They share the same functionality, but are styled differently."/>
            <figcaption> Why are these two features of the same page styled differently? </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/10.png">
    <figure>
        <img src="/projects/vr/10.png" alt= "Inconsistent button stylings"/>
        <figcaption> Inconsistent button stylings </figcaption>
    </figure>
</a>
</div>

### Observe
After reflecting on the key issues in the existing design, **observation of users** was the next step crucial to designing for a **user-centric** solution. In order to do so, I created some lean personas with different needs and painpoints. User journey maps were also used to identify painpoints in user flows.

#### Lean Personas
Olivia Smith

Needs:
- Access to current and comprehensive legal information
- Ability to order physical copies of the Victorian Reports
- Search feature to look through reports
- Download .pdf versions of reports for offline use
- Save useful documents for future use

Painpoints:
- Purchasing required reports quickly
- Integrating technology to streamline the research process
- Having an easier way to view connections between cases and legislation
- Finding cases that are useful to their practice




### Make

### 4. Final comments

<br/>
<br/>
<br/>

<p style="font-size: .95rem; color: grey; text-align: center;">© 2024 BarNetwork Pty Limited (ABN 32 092 121 198) and Wing Pang<p>