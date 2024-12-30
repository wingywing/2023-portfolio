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
        <img src="/projects/vr/thumbs/vr-banner.png" eleventy:formats="webp" alt=""/>
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

<div class="lightgallery">
    <a href="/projects/vr/00.png">
        <figure>
            <img src="/projects/vr/thumbs/00.png" eleventy:formats="webp" alt= "Redesigned homescreen"/>
            <figcaption> Redesigned homescreen
            </figcaption>
        </figure>
    </a>
</div>

<div id="inline-gallery-container" style="margin-top: -1rem">
    <a href="/projects/vr/17.png">
        <figure>
            <img src="/projects/vr/thumbs/17.png" eleventy:formats="webp" alt= "Components and branding for Victorian Reports"/>
            <figcaption> Components and branding for Victorian Reports </figcaption>
        </figure>
    </a>
        <a href="/projects/vr/18.png">
        <figure>
            <img src="/projects/vr/thumbs/18.png" eleventy:formats="webp" alt= "Screenshot of assorted redesigned screens (home, about, settings)"/>
            <figcaption> Assorted redesigned screens (home, about, settings) </figcaption>
        </figure>
    </a>
            <a href="/projects/vr/19.png">
        <figure>
            <img src="/projects/vr/thumbs/19.png" eleventy:formats="webp" alt= "Screenshot of redesigned store pages"/>
            <figcaption> Redesigned store pages </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/20.png">
        <figure>
            <img src="/projects/vr/thumbs/20.png" eleventy:formats="webp" alt= "Screenshot of redesigned browse pages"/>
            <figcaption> Redesigned browse pages </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/21.png">
        <figure>
            <img src="/projects/vr/thumbs/21.png" eleventy:formats="webp" alt= "Screenshot of redesigned error pages, with a Typeform styled to be like a chatbot"/>
            <figcaption> Redesigned error pages, with a Typeform styled to be like a chatbot </figcaption>
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
- [4. UI designs](#4.-ui-designs)
- [5. Final comments](#5.-final-comments)

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
            <img src="/projects/vr/thumbs/04.png" eleventy:formats="webp" alt= "The design infinity loop showing the endless process of observation, building and reflection."/>
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

The previous user flow of the Victorian Reports website required the user to **[recall rather than recognise](https://www.nngroup.com/articles/recognition-and-recall/)** what items they have already added to their cart, and how much money each item costed. The lack of information onscreen to help customers make informed purchase decisions contributes to the ****[ambiguity effect](https://onlinelibrary.wiley.com/doi/abs/10.1002/bdm.3960010303)****, which can decrease their feelings of trust towards the platform and lead to hesitation to finalise purchases.

<div class="lightgallery">
    <a href="/projects/vr/05.png">
        <figure>
            <img src="/projects/vr/thumbs/05.png" eleventy:formats="webp" alt= "Screenshot of the original shop screen showing how much the user has spent, without what they have already added to the cart"/>
            <figcaption>Original shop screen showing how much the user has spent, without what they have already added to the cart </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/06.png">
    <figure>
        <img src="/projects/vr/thumbs/06.png" eleventy:formats="webp" alt= "Screenshot of the original single volume screen, which lacks a preview of selected volumes and a way to purchase multiple"/>
        <figcaption>Original single volume screen, which lacks a preview of selected volumes and a way to purchase multiple</figcaption>
    </figure>
</a>
</div>

#### Lack of adherence to the WCAG accessibility guidelines
Throughout the site, there were **areas that did not adhere to the WCAG AA accessibility guidelines**. Considering accessibility in design is crucial to allowing all users to access and interact with the website effectively in an inclusive way. 

<div class="lightgallery">
    <a href="/projects/vr/07.png">
        <figure>
            <img src="/projects/vr/thumbs/07.png" eleventy:formats="webp" alt= "Screenshot of the former homescreen design, which is difficult to read due to the background image and small text"/>
            <figcaption> Former homescreen design, which is difficult to read due to the background image and small text </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/08.png">
        <figure>
            <img src="/projects/vr/thumbs/08.png" eleventy:formats="webp" alt= "Screenshot of title text (in beige) in the former design, which fails the WCAG colour contrast test"/>
            <figcaption>Title text in the former design, which fails the WCAG colour contrast test</figcaption>
        </figure>
    </a>
</div>

#### Inconsistencies in design
[**Consistency and standards**](https://www.nngroup.com/articles/consistency-and-standards/) is a design heuristic crucial to the feeling of seamlessness in user experience. Inconsistent styling of elements like buttons can detract from brand uniformity.

<div class="lightgallery">
    <a href="/projects/vr/09.png">
        <figure>
            <img src="/projects/vr/thumbs/09.png" eleventy:formats="webp" alt= "Image of browsing selectors for browse by catchwords and browse by name. They share the same functionality, but are styled differently."/>
            <figcaption> Why are these two features of the same page styled differently? </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/10.png">
    <figure>
        <img src="/projects/vr/thumbs/10.png" eleventy:formats="webp" alt= "Inconsistent button stylings"/>
        <figcaption> Inconsistent button stylings </figcaption>
    </figure>
</a>
</div>

### Observe
After reflecting on the key issues in the existing design, **observation of users** was the next step crucial to designing for a **user-centric** solution. I created lean personas representative of the key needs and painpoints of our target users. User journey maps were also used to identify painpoints in user flows.

#### Lean persona

<div class="persona">
<div class="title">
    <img class="portrait" src="/projects/vr/11.png" alt="AI-generated image of Jane Doe">
    <span class="name"> <b> Jane Doe </b> –&nbsp;An&nbsp;Australian&nbsp;Lawyer </span>
</div>

<blockquote>"I want an online platform that will let me access the most up-to-date legal information conveniently"</blockquote>
    <div class="needs-and-pains">
        <div class="needs">
        <b class="subheading">Needs:</b>
        <ul>
            <li>Access to <b>current and comprehensive</b> legal information</li>
            <li>Search feature to look through reports</li>
            <li>Download .pdf versions of <b>reports for offline use</b></li>
            <li><b>Save useful documents</b> for future use</li>
        </ul>
        </div>
        <div class="pains">
        <b class="subheading">Painpoints:</b>
        <ul>
            <li>A need to purchase required reports <b>quickly</b></li>
            <li>Integrating technology to <b>streamline the research process</b></li>
            <li>Wanting an easier way to <b>view connections between cases and legislation</b></li>
            <li>Difficulty finding cases that are useful to their practice</li>
        </ul>
        </div>
    </div>
 </div>
<div class="persona">
<div class="title">
    <img class="portrait" src="/projects/vr/11-2.png" alt="AI-generated image of John Doe">
    <span class="name"> <b> John Doe </b> –&nbsp;An&nbsp;Australian&nbsp;Lawyer </span>
</div>
<blockquote>"I want to be able to stock up on physcial copies of the Victorian Reports for my office library"</blockquote>
    <div class="needs-and-pains">
        <div class="needs">
        <b class="subheading">Needs:</b>
        <ul>
            <li>Ability to <b>order physical bound volumes</b> of the Victorian Reports</li>
            <li>Desire to <b>backfill orders</b> for missing volumes in his library</li>
            <li>Need to keep track of <b>purchasing invoices</b> for tax and billing purposes</li>
        </ul>
        </div>
        <div class="pains">
        <b class="subheading">Painpoints:</b>
        <ul>
            <li>Finds it difficult to navigate digital websites</li>
            <li>Difficulty <b>purchasing multiple copies</b> when needed</b></li>
            <li>Wanting an easier way to find the exact volume they're missing</li>
        </ul>
        </div>
    </div>
 </div>

#### User journey maps
Some user journey maps of the existing site were created to see opportunities for improvement in the existing **eCommerce** and **adding to shelf** journey.

<div class="lightgallery" style="margin-top: -1rem">
    <a href="/projects/vr/12.png">
    <figure>
        <img src="/projects/vr/thumbs/12.png" eleventy:formats="webp" alt= "Flowchart showing the user journey from the homescreen to finishing a purchase"/>
        <figcaption>User journey from the homescreen to finishing a purchase </figcaption>
    </figure>
    </a>
    <a href="/projects/vr/13.png">
    <figure>
        <img src="/projects/vr/thumbs/13.png" eleventy:formats="webp" alt= "Flowchart showing the user journey from the homescreen to adding an item to the shelf"/>
        <figcaption> User journey from the homescreen to adding an item to the shelf </figcaption>
    </figure>
    </a>
</div>

### Make
After doing an audit of the existing website, I got around to creating designs for the renewed website. This involved **sketching** and **prototyping**.

#### Sketches
Sketches for the initial ideas were messy, but helped to jot down the key components that we wanted to revamp. 

The below sketches shows some drafts of **UI that adapted to authentication**, a new navigation bar with more useful links, and engaging store pages with **mobile-responsive design**.

<div class="lightgallery">
    <a href="/projects/vr/14.png">
    <figure>
        <img src="/projects/vr/thumbs/14.png" eleventy:formats="webp" alt= "Rough sketches showing changes to the homescreen, shop screen and navigation bar"/>
        <figcaption> Initial ideas and sketches </figcaption>
    </figure>
</a>
</div>

#### Prototyping
The prototyping phase involved **wireframing** and **high-fidelity prototypes**. Wireframes were used to help with the initial iterative process before [components from the Open Law Design System](/projects/openlaw/#reuseable-components) was integrated.

<div class="lightgallery" style="margin-top: -1rem">
    <a href="/projects/vr/15.png">
        <figure>
            <img src="/projects/vr/thumbs/15.png" eleventy:formats="webp" alt= "Wireframe of the adding to shelf flow"/>
            <figcaption> Wireframe of the adding to shelf flow </figcaption>
        </figure>
    </a>
        <a href="/projects/vr/16.png">
        <figure>
            <img src="/projects/vr/thumbs/16.png" eleventy:formats="webp" alt= "Hi-fi prototype of the adding to shelf flow"/>
            <figcaption> Hi-fi prototype of the adding to shelf flow </figcaption>
        </figure>
    </a>
            <a href="/projects/vr/16-2.png">
        <figure>
            <img src="/projects/vr/thumbs/16-2.png" eleventy:formats="webp" alt= "Hi-fi prototype of the store flow"/>
            <figcaption> Hi-fi prototype of the store flow </figcaption>
        </figure>
    </a>
            <a href="/projects/vr/16-3.png">
        <figure>
            <img src="/projects/vr/thumbs/16-3.png" eleventy:formats="webp" alt= "Hi-fi prototype of the add to cart flow"/>
            <figcaption> Hi-fi prototype of the add to cart flow </figcaption>
        </figure>
    </a>

</div>

### 4. UI designs

By the end of the project, virtually every screen of the existing website was refreshed to follow the new branding.

<div class="lightgallery" style="margin-top: -1rem">
    <a href="/projects/vr/17.png">
        <figure>
            <img src="/projects/vr/thumbs/17.png" eleventy:formats="webp" alt= "Components and branding for Victorian Reports"/>
            <figcaption> Components and branding for Victorian Reports </figcaption>
        </figure>
    </a>
        {# <a href="/projects/vr/18.png">
        <figure>
            <img src="/projects/vr/thumbs/18.png" eleventy:formats="webp" alt= "Screenshot of assorted redesigned screens (home, about, settings)"/>
            <figcaption> Assorted redesigned screens (home, about, settings) </figcaption>
        </figure>
    </a>
            <a href="/projects/vr/19.png">
        <figure>
            <img src="/projects/vr/thumbs/19.png" eleventy:formats="webp" alt= "Screenshot of redesigned store pages"/>
            <figcaption> Redesigned store pages </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/20.png">
        <figure>
            <img src="/projects/vr/thumbs/20.png" eleventy:formats="webp" alt= "Screenshot of redesigned browse pages"/>
            <figcaption> Redesigned browse pages </figcaption>
        </figure>
    </a>
    <a href="/projects/vr/21.png">
        <figure>
            <img src="/projects/vr/thumbs/21.png" eleventy:formats="webp" alt= "Screenshot of redesigned error pages, with a Typeform styled to be like a chatbot"/>
            <figcaption> Redesigned error pages, with a Typeform styled to be like a chatbot </figcaption>
        </figure>
    </a> #}
</div>

### 5. Final comments
After finishing the Figma redesigns and prototypes, I went on to help with building the frontend components using **SASS and HTML**. Although the project hasn't been launched yet, most of the frontend has been completed.

Some key takeaways and learnings I've gotten from this project through user testing and self-reflection were:

#### The small things add up
Analysing the small inconsistencies in design of the existing website showed that **small differences in padding, style and spacing can lead to a disjointed user experience**.

#### Collapse where possible
For mobile screens, having collapsible sections really help to reduce the amount of scrolling required, allowing users to **skip right to where they want their content**.

#### Aesthetics do matter
The main user flow/functionality of the redesign remained quite similar to the existing website, but by updating the design to look and feel more modern, [**the product feels more usable**](https://medium.com/@coffeeandjunk/design-psychology-aesthetic-usability-effect-494ed0f22571).

I really enjoyed working on this project and pushing the boundaries on how I could give the Victorian Reports a refreshed branding. In the future, I would like to spend more time on the research and prototyping stages to create a truly unique user experience that focuses on the customer needs.

<br/>
<br/>
<br/>

<p style="font-size: .95rem; color: grey; text-align: center;">© 2024 BarNetwork Pty Limited (ABN 32 092 121 198) and Wing Pang<p>