# midMarFinal

welcome to Save the Bees - a simple interactive poster.

instructions: scroll horizontally to make the bee fly. click on the hives to fill them in. enjoy!

design process/inspiration: I started this project with the goal of creating a motion graphic loop with hexagons, inspired by the amazing coder Bees and Bombs. 
After running into multiple dead ends, I decided to abandon the motion graphic, and see what I could do with the hexagons... and Save the Bees was born. 
First I created the bee graphic (see reference) and animated it using the JavaScript Scroll function, with the help of additional JS libraries called ScrollMagic and BezierPlugin. Next I put a p5 canvas behind the bee, and created the hexagon-shaped hives. The hives are drawn with a JavaScript class, each individual hexagon is an object in an array called hives[].
I finished the project by adding some interactivity where the hexagons change color when clicked on.

challenges/next steps: I really wanted to use GSAP TweenLite to rotate the hives (hexagons) on hover. I was able to do that successfully with one single hexagon (check out my example https://editor.p5js.org/rw2423/sketches/4t9ekkrDA), however I was not able to figure out how to apply a GSAP animation to an array of objects. Another area I had diffculties with was the interactivity aspect- I wanted the hives to change color on mouseOver, instead of mousePressed, yet was still unsuccessful.

references:
the coding train: "clicking on objects" youtube.com/watch?v=DEHsr4XicN8
javascript scroll animation tutorial https://www.youtube.com/watch?v=fR0tHI0nFYk
p5 reference for polygon function
bee png https://www.pngguru.com/free-transparent-background-png-clipart-bnaou
