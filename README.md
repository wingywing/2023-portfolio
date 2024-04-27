# 2023-portfolio
A new portfolio using 11ty as base.


## Why 11ty?
It's fast! Also well-loved by the IndieWeb community.


## Dev
run `npm run start`

Add component styles to components.scss which will be imported by global.scss 

You can import components using the macro below
**Make sure commas are in the right place!** 
```njk
        {{
            component('button',{ //button is the component name
                innercontent: '
                <div class="hamburger-icon">
                    <div class="line-one line"></div>
                    <div class="line-two line"></div>
                    <div class="line-three line"></div>
                </div>
                ', //innercontent can pass through html
                class: 'header__mobile-hamburger-button mobile', //pass through desired classname
                id: 'header__mobile-hamburger-button', //pass through desired id
                onclick: 'toggleMobileMenu()', //assign an onclick
                arialabel: 'Open mobile navigation menu' //arialabel!
            })
        }}
```

## Stylesheets
Each page (and some components) have five stylesheets hooked up to it for scoped and mobile responsive designs.

The structure looks something like this:
- page.scss -- the main stylesheet that imports all the sass partials for responsive design
- _base.scss -- contains styles that are shared across all device sizes
- _mobile.scss -- mobile only styles (note that there is no mobile viewport width media query since I code from a mobile-first approach)
- _tablet.scss and _desktop.scss -- these import breakpoints from a breakpoints mixins stylesheet in the global stylesheets folder.

All pages are styled following a responsive 12-column grid system (in grids.scss), where column gaps increase in value as the screen width increases.

This 12-column grid is mapped to the grid system I use in Figma (mobile: 0, tablet: 0.625rem and desktop: 1rem).

