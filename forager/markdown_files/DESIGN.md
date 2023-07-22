# Design Document FORAGER:

### Nathanael Han

***

## first.html , stylesheet: style2.css

‘Forager.com’ is implemented using HTML, CSS, and JavaScript. The landing page of the site (first.html)
is implemented by embedding an mp4 file within video tags. First.html links to the stylesheet
style2.css. In this file, the css values are set so the video is centered and fills the screen.
The text and button in the h1 tags is centered and is overlaid by setting the z-index to 1. Also, in the
class of ‘.cover’ I created a dark-gray overlay that is slightly transparent. This has the effect of making
the video very muted in color.

## index.html , stylesheet: style.css

In index.html, I implemented the navigation bar using ul, li, and anchor tags. For my website’s text I
embedded a few styles from Google fonts. For the image in the main section, I styled the
background-attachment property to be 'fixed'. This creates a scrolling effect so that the rest of the page
moves while the picture remains in place. After this I implemented a slideshow window using bootstrap’s
carousel component. This is styled under the class ‘.caro’. Using the @media rule I made elements of the website
responsive – when the window reaches a certain size, the styles of the carousel and the header change accordingly.
In the footer section of index.html, I made another navigation menu, and also I included a button that toggles the
background color of the website.

## toggle.js

The code behind this button is implemented in the ‘toggle.js’ file. This code works
by creating an array of hex color codes, and incrementing an index value on each click of the button. The current index
of the array is saved in localStorage, and the CSS is modified depending on this saved index. This way the color
change is conserved across each page, and when the page is refreshed.

## plants.html, mush.html, ocean.html,  stylesheet: style.css

In the ‘gallery’ pages (plants.html, mush.html, and ocean.html), I utilized the Bootstrap cards component. Using
the grid layout system (using the class “row row-cols-1 row-cols-md-3”), I created a gallery with 3 columns. Each
card has an image, and is nested in an anchor tag so that they link to a page with more information.
For these pages, I styled '.card'  by using the :hover pseudo-class – by changing the opacity
and size, the cards appear to be pressed down when moused over.

## information and map HTML pages,   stylesheet: style.css

The other pages, which include information on various wild edibles, use the Google Maps API. Inside of this
JavaScript, I also created markers, using latitude and longitude to include locations of certain plants.
Below this code is another bootstrap component called a Jumbotron. Here I use the h1 tags and p tags, to enter text about each
wild edible. Below this, I also included an image tag to display a photo.
