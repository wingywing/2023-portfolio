---
layout: project/project.njk
tags: project
title: "Automating document and presentation styling with a tool suite"
role: "Frontend Development, Product Strategy, Branding, Design System, AI Tooling"
projecttype: "AI Ops"
client: "Digizoo"
duration: "3 months"
year: 2026
description: "A tool suite that automates the styling of documents and slide decks, cutting the time the sales team needs to send a Digizoo-branded SoW."
date: 2026-08-01
categories:
    - case-study
---
<div class="project-header">
    <div class="project-banner">
        <img src="/projects/ai-tool-suite/cover.png" eleventy:formats="webp" alt=""/>
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

This technical details of this project have been omitted to comply with NDA as Digizoo’s Intellectual Property.

## Contents
- [My Role](#my-role)
- [Project Overview](#project-overview)
- [Output examples](#output-examples)
  - [Generated slide deck example](#generated-slide-deck-example)
  - [Generated document example](#generated-document-example)
- [Impact](#impact)
- [The Problem](#the-problem)
- [Goals and Objectives](#goals-and-objectives)
- [The Solution](#the-solution)
  - [Extendable themes](#extendable-themes)
  - [Typography engine that balances text visually where possible, and prevents orphans and widows (stranded words/sentences)](#typography-engine-that-balances-text-visually-where-possible,-and-prevents-orphans-and-widows-(stranded-words/sentences))
  - [Styled documents and decks with the ability to be co-branded for client pitches](#styled-documents-and-decks-with-the-ability-to-be-co-branded-for-client-pitches)
  - [Document formatting customised based on sales or legal requirements](#document-formatting-customised-based-on-sales-or-legal-requirements)
  - [Slide layouts that adhere to a design grid](#slide-layouts-that-adhere-to-a-design-grid)
  - [Bespoke icon libraries and layouts](#bespoke-icon-libraries-and-layouts)

## My Role

I was the sole designer and developer of the Monotreme tool suite in Digizoo, which includes:

- Echidna: an automatic document styler and generator
- Platypus: a branded slide deck presentation generator
To create these tools, I utilised Claude Code for the development process.

As the Monotreme suite began to mature, I worked with my colleagues in integrating the tool suite, and developing our internal AI platform, Keeper, which serves as a central knowledge base for our wider organisation.


## Project Overview

The project started off as a series of Claude Code experiments to automate tedious aspects of design, where speed and brand consistency is paramount (namely for policy documents, SOWs, pitch decks and playbacks).

The tool suite was created to be highly designed and customisable, with theming support for different brands. Unlike generic AI design solutions on the market, the Monotreme suite provides designers full control and customisation of layouts through a block and layout system.

Monotreme was designed to be AI-first, usable by AI agents and non-technical audiences through Claude Cowork (or other AI harnesses) as a plugin and a MCP server.


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/01.png">
        <figure>
            <img src="/projects/ai-tool-suite/01.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


## Output examples

Here are some output examples of a deck and text doc which were generated from scratch using the Monotreme tool suite.


### Generated slide deck example


<div class="embed" style="--embed-ratio: 0.6">
    <iframe src="attachment:b3ec571b-dc4e-40ce-bed0-6a05a25a5f20:platypus-showcase.html" loading="lazy"
            allowfullscreen title="Embedded preview"></iframe>
</div>


### Generated document example

Echidna-styled documents are often used for policy documents, Statement of Work (SoW) documents or Business Requirements Documents (BRD).


<div class="embed" style="--embed-ratio: 0.6">
    <iframe src="attachment:e1cf76af-5a71-414f-874b-509c5d97be54:echidna-documents-overview.html" loading="lazy"
            allowfullscreen title="Embedded preview"></iframe>
</div>


## Impact

- Time reduced for the styling of documents, policies and SOWs by over 1200% (from 1 hour per document to ~5 minutes, where documents can be styled in parallel through sub-agents)
- Increased consistency between documents and slide decks, contributing to a cohesive brand experience
- Free my time up to do more impactful and meaningful work

## The Problem

Being in a small organisation, our design capacity is limited.

When our time is divided on client sites, where we focus on working *with* people to solve problems, trying to style Word documents or PowerPoint decks to be brand coherent becomes a tedious but necessary chore.

Even with the creation of document and slide templates, the artifacts produced by colleagues from non-design backgrounds often miss the mark in style consistency, deteriorating brand trust.

Additionally, most AI design tools on the market often lack refinement in the finer details, leading to results that are easily recognisable as AI-generated and cheap.


## Goals and Objectives

- Automate the document and deck styling process, allowing users to feed information or existing documents for a branded output
- Create a heavily themeable tooling that can be customised by designers to the finest detail
- Enforce Word as an collaborative authoring tool and *not* a publishing tool
- Remove the need to use Powerpoint at all for an AI-native experience

## The Solution


### Extendable themes

Themes, blocks and layouts can be extensively customised by a designer to adapt to different/client branding.


<div class="lightgallery media-group">
    <a href="/projects/ai-tool-suite/02.png">
    <figure>
            <img src="/projects/ai-tool-suite/02.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
    <a href="/projects/ai-tool-suite/03.png">
    <figure>
            <img src="/projects/ai-tool-suite/03.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


### Typography engine that balances text visually where possible, and prevents orphans and widows (stranded words/sentences)


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/04.png">
        <figure>
            <img src="/projects/ai-tool-suite/04.png" eleventy:formats="webp" alt="While there is enough space in the cells for “and” and “per” to be on the top line, the typography engine pushes it to the next line to avoid orphans at the end of a sentence" />
            <figcaption>While there is enough space in the cells for “and” and “per” to be on the top line, the typography engine pushes it to the next line to avoid orphans at the end of a sentence</figcaption>
        </figure>
    </a>
</div>


### Styled documents and decks with the ability to be co-branded for client pitches

Users can provide a client logo for the document to be co-branded with the client’s logo in the cover pages and/or contents


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/05.png">
        <figure>
            <img src="/projects/ai-tool-suite/05.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/06.png">
        <figure>
            <img src="/projects/ai-tool-suite/06.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


### Document formatting customised based on sales or legal requirements

Legal/policy documents have numbered sections and legal footers


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/07.png">
        <figure>
            <img src="/projects/ai-tool-suite/07.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/08.png">
        <figure>
            <img src="/projects/ai-tool-suite/08.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


### Slide layouts that adhere to a design grid


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/09.png">
        <figure>
            <img src="/projects/ai-tool-suite/09.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


### Bespoke icon libraries and layouts


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/10.png">
        <figure>
            <img src="/projects/ai-tool-suite/10.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>


<div class="lightgallery">
    <a href="/projects/ai-tool-suite/11.png">
        <figure>
            <img src="/projects/ai-tool-suite/11.png" eleventy:formats="webp" alt="" />
        </figure>
    </a>
</div>
