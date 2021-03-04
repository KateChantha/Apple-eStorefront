## Apple eStorefront App

This project was built with pure JavaScript.

### Working Steps
1. in html, section-1 was clip using clip-path with the help of [CSS clip-path maker](https://bennettfeely.com/clippy/).
2. For section-1, create a slideshow as a backround image dynamically using JavaScript to loop over imagesList. 
- We will hide all images(opacity: 0) by default.
- assign .change(pacity : 1) class to the first image in the list by default.
- setInerval to remove .change on the current target, and reassign .change class to the next element.