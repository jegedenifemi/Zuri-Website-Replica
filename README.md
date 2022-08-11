# Zuri-Website-Replica
A replica of the [ZURI](https://zuri.team/) Website.

## Description
### Overview
This project features 3 pages of the website; the home page, the "I'm new to the Industry" page & the "I need industry experience" page.
Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Live Site URL: [View Here!](https://jegedenifemi.github.io/Zuri-Website-Replica/)

## Process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox & Grid

### What I learned
- CSS only Accordion for FAQs Section
- Creating a modal using CSS and JavaScript

HTML
```html
     <div class="accordion_item">
          <label>
            <input type="checkbox" />
            <h4>Question goes here?</h4>
            <p>
              Answer goes here
            </p>
          </label>
        </div>
 ````
CSS
```css
.accordion_item input,
.accordion_item input ~ p  {
  display: none;
}
.accordion_item input:checked ~ p {
  display: block;
}
````


## Author
- Twitter - [@jegedenifemi](https://twitter.com/jegedenifemi)

