---
layout: project/project.njk
tags: project
title: "Conversion and consolidation from a legacy to modern experience"
role: "UX Design, UI Design"
projecttype: "Mobile"
client: "Logistics"
duration: "1 month"
description: "A research-led integration of data sources that cut the number of platforms and the context-switching a frontline worker needs to get through their day."
date: 2025-11-01
categories:
    - case-study
---
<div class="project-header">
    <div class="project-banner">
        <img src="/projects/legacy-conversion/01.png" eleventy:formats="webp" alt=""/>
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

{{ description }}

This case study has been anonymised and rebranded to remove identifiable client information to comply with NDA.


## My Role

I was contracted as a User Interface and User Experience Consultant at a large Australian logistics company. The team was small with just two designers including myself, but we worked extensively with the Engineering and Development team to reach business requirements set by a Product Manager.


## Project Overview

This project involved designing a new platform for monitoring freight, while implementing new APIs made available to us. The biggest challenge was convincing end-users to switch over from a twenty year old legacy system by creating a seamless transition based on their existing workflows.


## The Result


### In just four months, the number of daily users for the app more than doubled.



### Adopting a people-first approach delivers proven results, measured through surveys, interviews, and data analysis

By engaging with the end-users directly and testing at every stage of design, I was able to convert legacy system users to long-term champions of the new platform.


![](/projects/legacy-conversion/02.png "")


## The Case Study

While an entire platform has been designed, for brevity, this case study will focus on a single initiative within the application—a vehicle dashboard designed for Safety Officers.


### The Problem

The client’s Data Engineering team had recently gained access to a wealth of real-time telematics data (e.g. vehicle speed, brake pressure, tyre temperature) for a fleet of cars. While technically available, this information wasn’t accessible to those who needed it most—Safety Officers who oversee driver welfare and vehicle maintenance.

Alerts were inconsistently communicated via email and often buried in inboxes, making response times unpredictable and manual tracking unsustainable. Additionally, the lack of real-time alerts meant that maintenance was often reactionary as opposed to preventative.


### Goals and Objectives

- Identify which telematics data is most relevant to Safety Officers
- Understand the workflow and pain points of Safety Officers for vehicle incidents and maintenance.
- Design hi-fi dashboard widget components with different use-states depending on the data available.
- Collaborate with the Data and Software Engineering teams to ensure technical feasibility.
- Integrate useful information from other datapoints for a comprehensive solution.

### The Solution

Through user interviews and card-sorting activities, I designed a desktop solution for viewing the most important vehicular data-points at a glance for Safety Officers.

The designs incorporate alerts created by the Data Engineering team, allowing Safety Officers to action and clear them by calling the drivers involved. Important information from other data sources have also been integrated to provide a robust design solution.


#### View a whole fleet, or focus on a single vehicle

The vehicle fleet dashboard allows Safety Officers to see an overview of all assets and their statuses. Meanwhile, individual car dashboards enable more granular viewing of specific assets.


![](/projects/legacy-conversion/03.png "")


![](/projects/legacy-conversion/04.png "")


#### View Emergency Alerts at a glance

Safety Officers can see cars with Emergency Alerts such as Collision Alerts and action directly from the application. Through permissions-flagging, clearing and actioning alerts is only available to Safety Officers.


![Integration with legacy systems allow Safety Officers to action newly integrated Emergency Alerts without needing to switch applications](/projects/legacy-conversion/05.png "Integration with legacy systems allow Safety Officers to action newly integrated Emergency Alerts without needing to switch applications")


<video controls loop muted playsinline width="100%"><source src="/projects/legacy-conversion/06.mp4" type="video/mp4"></video>

*The activity tab allows users to see alerts contextualised to a vehicle’s journeys*


#### Access all vehicle specifications in a single platform

Rather than needing to look through documentation for specific car models, details of a vehicle is available on the portal, reducing the need for context switching.


![Car specifications can be useful to third-party maintainers if the platform is made available to them](/projects/legacy-conversion/07.png "Car specifications can be useful to third-party maintainers if the platform is made available to them")


#### Monitor live vehicle events or audit past journeys

Safety Officers and other business stakeholders can inspect a car’s current and past journeys to audit refuel events and other events such as maintenance.


<video controls loop muted playsinline width="100%"><source src="/projects/legacy-conversion/08.mp4" type="video/mp4"></video>

*Users can view point-in-time information of a vehicle’s journey*


### UX Research


#### User Interviews

We conducted user interviews and card-sorting activities with both Safety Officers and Data Engineers. Some key takeaways that arose from interviewing included:

- Most of the alerts are currently sent via email, making them easy to miss or leading to delayed response.
- There’s no central way to monitor live data. Safety Officers often rely on secondhand reports.
- Multiple calls and manual checks are made to assess the same issue, leading to unnecessary repetition in messaging.
- Access to certain data (e.g. tire pressure, fuel spikes) could prevent incidents before they happen.
A data dictionary provided by the engineering team guided us in prioritising and interpreting raw data into usable components.


![Note: The datapoints in this data dictionary have been redacted to comply with NDA.](/projects/legacy-conversion/09.png "Note: The datapoints in this data dictionary have been redacted to comply with NDA.")


![Card-sorting activity conducted on Miro with the Safety Officers, which looked at different datapoints in the data dictionary (redacted).](/projects/legacy-conversion/10.png "Card-sorting activity conducted on Miro with the Safety Officers, which looked at different datapoints in the data dictionary (redacted).")


#### **Lean Persona**

A Safety Officer persona was created following user interviews to guide our design decisions, and to ensure that the team remained focused on what matters to our end user.


![Note: the images of this persona was generated using AI for anonymity](/projects/legacy-conversion/11.png "Note: the images of this persona was generated using AI for anonymity")


#### **Existing and Ideal User Flows**

**Legend**


![](/projects/legacy-conversion/12.png "")

**Existing User Flow**


![](/projects/legacy-conversion/13.png "")

**Main Pain Points:**

- Back-and-forth between drivers and Safety Officers. In the event of an emergency, the additional time required for diagnosing defects can lead to severe stress for both parties involved. In the worst case scenario, miscommunication can lead to severe injury or death.
- Remediation as opposed to preventative care. Internal issues such as fuel engine faults weren’t diagnosed before the situation evolved into an emergency.
- Difficulty diagnosing internal faults. Internal damage could only be diagnosed once the car arrives at a maintenance stop. This extends the amount of time required for repairs, reducing overall car availability for the business.
**Ideal User Flow**


![](/projects/legacy-conversion/14.png "")

**Points of Improvement**

- Additional phase in the user flow which identifies vehicle damage and allows Safety Officers to alert drivers before the situation escalates.
- Enable Data Engineers to create custom alerts that can be sent automatically to Safety Officers through a live dashboard.
- Enable other areas of the business to view car maintenance history through a single source of truth.

### Stakeholder Engagement

This project was developed in close collaboration with:

- An SME on transport, who validated design iterations and flows and managed relationships between business employees and Safety Officers who are unionised.
- Data Engineers, who defined the alert thresholds and logic.
- Software Engineers, who confirmed what could be implemented in current sprints.
- Safety Officers, who provided direct feedback on usability.
Working closely across departments was essential for this project due to the evolving nature of the telematics pipeline, especially as new data was made available.


## Solution

By the end of this project, I designed a comprehensive desktop dashboard that empowers Safety Officers with real-time visibility into vehicle telematics data. This platform bridges the gap between complex data and actionable insights, enabling quicker response times and proactive vehicle management. The highlights of this project include:

- An intuitive interface featuring both fleet-wide overviews and detailed individual vehicle metrics
- Emergency alert notifications with direct action capabilities within the platform
- Consolidated vehicle specifications in one location to eliminate documentation searches

![](/projects/legacy-conversion/15.png "")
