## Apple eStorefront App

This project was built with pure JavaScript.

### Working Steps
1. in html, section-1 was clip using clip-path with the help of [CSS clip-path maker](https://bennettfeely.com/clippy/).
2. For section-1, create a slideshow as a backround image dynamically using JavaScript to loop over imagesList. 
- We will hide all images(opacity: 0) by default.
- assign .change(pacity : 1) class to the first image in the list by default.
- setInerval to remove .change on the current target, and reassign .change class to the next element.
3. 3d cube. 
- We have to specify .cube-wrapper (parent) with perpective
```
.cube-wrapper {
  perspective: 100rem;
}
```
and .cube(child) with preserve-3d
```
.cube {
  transform-style: preserve-3d;
}
```
- .font-side and .back-side is offset 5rem form the .cube position (the origin/ center of the tranformation).
```
.front-side {
  transform: translateZ(5rem);
}
.back-side {
  transform: translateZ(-5rem);
}
```
4. The thickness of the cube.
- Make sure childs of the .cube-wrapper that is .front-side and .back-side has preserve-3d value
```
.front-side,
.back-side {
  transform-style: preserve-3d;
}
```
- use ::before and ::after to target top&bottom sides of the cube. Thickness of the cube 'height: 10rem;' determined by front-side ranslateZ(5rem) & front-side ranslateZ(-5rem). 
- Then move the origin down so that the edge is touch the back-face. To do that by 'transform-origin: top;'
```
.front-side::before {
  height: 10rem;
  transform-origin: top;
}
```