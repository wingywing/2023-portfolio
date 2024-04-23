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