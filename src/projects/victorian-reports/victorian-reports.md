---
layout: project/project.njk
tags: project
title: "Accessible platform redesign for the Victorian Reports"
role: "UX Design, UI Design, Frontend Development, Branding, Accessibility"
projecttype: "Website"
client: "Legal/Government"
duration: "3 months"
year: 2025
description: "An accessible, mobile-responsive overhaul of the Victorian Reports platform, so legal professionals can access and purchase the Victorian Law Reports online."
date: 2025-04-01
categories:
    - case-study
---
<div class="project-header">
    <div class="project-banner">
        <img src="/projects/victorian-reports/cover.png" eleventy:formats="webp" alt=""/>
    </div>
    <div class="information">
        <h1>{{ title }}</h1>
        <div class="details">
            <span>{{ role }}</span>
            <span>&bull;</span>
            <span>{{ projecttype }}</span>
            <span>&bull;</span>
            <span>{{ client }}</span>
            <span>&bull;</span>
            <span>{{ duration }}</span>
        </div>
    </div>
</div>

*We acknowledge the Aboriginal people as the Traditional Owners of this land, and pay our respects to Elders past and present. Working from Darug and Gadigal land.*

{{ description }}
<br/>

## Contents
- [My Role](#my-role)
- [Project Overview](#project-overview)
- [Impact](#impact)
- [The Problem](#the-problem)
- [Goals and Objectives](#goals-and-objectives)
- [The Solution](#the-solution)
  - [Streamlined eCommerce Flow](#streamlined-ecommerce-flow)
  - [Responsive Layouts with Collapsible UI](#responsive-layouts-with-collapsible-ui)
  - [Accessible and Consistent Design](#accessible-and-consistent-design)
- [UX Research](#ux-research)
  - [User Interviews and Lean Personas](#user-interviews-and-lean-personas)
  - [Journey Mapping](#journey-mapping)
- [Stakeholder Engagement](#stakeholder-engagement)
- [Solution Summary](#solution-summary)
- [Outcome and Final Remarks](#outcome-and-final-remarks)

## My Role

The Victorian Reports design overhaul was a project I completed during my time at [BarNet Open Law](https://openlaw.com.au/). In this project, I took ownership of the full end-to-end design process. I also assisted developers with coding frontend components using SASS and HTML.


## Project Overview

The Victorian Reports website is the primary digital platform for purchasing and browsing legal publications by the Council of Law Reporting in Victoria.

This project involved a full UI/UX overhaul to modernise the website, improve accessibility, and streamline eCommerce flows. I worked closely with the Open Law development team to implement the new design system and ensure the platform was future-proof and maintainable.


<div class="lightgallery">
    <a href="/projects/victorian-reports/01.png">
        <figure>
            <img src="/projects/victorian-reports/01.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


## Impact

- Improved accessibility and responsiveness site-wide, adhering to [WCAG 2.2 AA standards](https://www.w3.org/WAI/WCAG22/Understanding/).
- Redesigned end-to-end purchase and browsing journeys to reduce friction.
- Supported frontend developers by implementing a mobile-responsive, modular stylesheet system with SASS and HTML.

## The Problem

Although the Victorian Reports website was usable from a functionality standpoint, there were some issues with the User Interface and Experience:

- Inconsistent UI across similar components (e.g., buttons, menus, filters).
- A disruptive shopping experience with poor cart visibility and no ability to preview or bulk-purchase volumes.
- Lack of responsive design and poor accessibility compliance.
- A dated design aesthetic.

<div class="lightgallery">
    <a href="/projects/victorian-reports/02.png">
        <figure>
            <img src="/projects/victorian-reports/02.png" eleventy:formats="webp" alt="Existing webpage design" />
            <figcaption>Existing webpage design</figcaption>
        </figure>
    </a>
</div>


<div class="lightgallery">
    <a href="/projects/victorian-reports/03.png">
        <figure>
            <img src="/projects/victorian-reports/03.png" eleventy:formats="webp" alt="Existing text colours fail to pass WCAG contrast tests" />
            <figcaption>Existing text colours fail to pass WCAG contrast tests</figcaption>
        </figure>
    </a>
</div>


## Goals and Objectives

- Conduct a UX audit to identify usability issues.
- Improve the end-to-end user journey for browsing, purchasing, and accessing legal volumes.
- Design a consistent and accessible UI system aligned with WCAG AA standards.
- Assist with building out frontend components through HTML and SASS.

## The Solution

After analysing the existing site and collaborating with internal stakeholders, I conducted a full design overhaul of the Victorian Reports website.


### Streamlined eCommerce Flow

The legacy purchase flow required users to recall items already added to the cart, creating confusion and distrust. I redesigned the flow to support:

- Persistent cart visibility.
- Bulk volume selection.
- Clear purchase summaries.

<div class="lightgallery">
    <a href="/projects/victorian-reports/04.png">
        <figure>
            <img src="/projects/victorian-reports/04.png" eleventy:formats="webp" alt="Updated eCommerce flow with cart persistence and a consistent purchasing flow" />
            <figcaption>Updated eCommerce flow with cart persistence and a consistent purchasing flow</figcaption>
        </figure>
    </a>
</div>


### Responsive Layouts with Collapsible UI

To reduce mobile scrolling fatigue for mobile users, I introduced collapsible content blocks for product information, settings, and forms. This also helps desktop users by keeping the interface clean and distraction-free.


<div class="lightgallery">
    <a href="/projects/victorian-reports/05.png">
        <figure>
            <img src="/projects/victorian-reports/05.png" eleventy:formats="webp" alt="Mobile designs were created in junction with its desktop counterpart, allowing for a mobile-responsive experience" />
            <figcaption>Mobile designs were created in junction with its desktop counterpart, allowing for a mobile-responsive experience</figcaption>
        </figure>
    </a>
</div>


### Accessible and Consistent Design

I implemented a design system that addressed contrast issues and inconsistent component styling. The redesign adheres to WCAG 2.2 Level AA standards, with:

- Minimum colour contrast ratios for text.
- Large touch targets for key buttons and links.
- Consistent UI components reused across the platform.

## UX Research


### User Interviews and Lean Personas

To better understand our audience, I created personas based on discussions with internal legal professionals. Our key users were lawyers and law librarians who relied on the site for up-to-date legal material.

**Jane – Lawyer**


> “I want an online platform that will let me access the most up-to-date legal information conveniently.”

**John – Law Librarian**


> “I need to order physical bound volumes and keep track of what I’ve already bought.”

Their pain points informed the following key design principles:

- Visibility of cart status and purchase history.
- Clear product filtering and categorisation.
- Simple, mobile-friendly navigation.

### Journey Mapping

User flows revealed where users dropped off or became confused—especially during purchasing or when attempting to browse by volume.


<div class="lightgallery">
    <a href="/projects/victorian-reports/06.png">
        <figure>
            <img src="/projects/victorian-reports/06.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


<div class="lightgallery">
    <a href="/projects/victorian-reports/07.png">
        <figure>
            <img src="/projects/victorian-reports/07.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>

Key blockers:

- Hidden cart.
- No preview of selected items.
- Difficulty in finding or reordering volumes.

## Stakeholder Engagement

The Open Law team was highly collaborative throughout. For this project, I worked directly with both legal experts and developers to align on priorities.

I also supported developers by:

- Building a scalable stylesheet system with SASS.
- Coding reusable components using HTML and SASS.

## Solution Summary

- Designed responsive screens for every major section: home, product browse, purchase, and error pages.
- Coded reusable UI components using HTML and SASS.
- Supported dev team with frontend integration and live design QA.
- Simplified mobile and desktop navigation with collapsible UI and touch-friendly layouts.

<div class="lightgallery">
    <a href="/projects/victorian-reports/08.png">
        <figure>
            <img src="/projects/victorian-reports/08.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


## Outcome and Final Remarks

While the full rollout of the new Victorian Reports site is still underway, the majority of the frontend is complete and awaiting integration.

This project taught me the importance of:

- Starting from user pain points, not assumptions.
- Making the most of every design detail, from button spacing to responsive layouts.
- Aligning closely with developers to ensure feasibility and maintainability.
I really enjoyed working on this project and pushing the boundaries on how I could give the Victorian Reports a refreshed branding. It was great to be able to be involved in the frontend development process, allowing quick changes and components that fit my design vision.

© 2024 BarNetwork Pty Limited (ABN 32 092 121 198) and Wing Pang
