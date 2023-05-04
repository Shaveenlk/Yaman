// change color
function changecolor() {
  // Get the select element with the ID "selectid" for bg color
  var x = document.getElementById("selectcolorid");
   // Get the select element with the ID "selectid" for bg color
  var y = document.getElementById("selectcolorid");
  // Get the value of the selected option 
  var bgcolor = x.value;
  var fontcolor = y.value;
   // Set the background color  with the ID "main-container" to the value of bgcolor
  document.getElementById("main-container").style.backgroundColor = bgcolor;
  // Set the background color with the ID "full-image-description"  to the value of bgcolor
  document.getElementById("full-image-description").style.color =fontcolor;
}


// Reference:https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

// This function is used to delay showing the full-size image when  user hovers over an image
function delayShowImage(element) {
// The setTimeout function is used to delay the execution of a function by a certain number of milliseconds
setTimeout(function() {

  // Call the showImage function with the given element
  showImage(element);
}, 700);  // Wait 700 milliseconds before showing the image
}


function showImage(element) {

// Get the URL of the image from the background-image 
var imageUrl = element.style.backgroundImage.slice(4, -1).replace(/"/g, "");

// Get the image description from the "data-description"
var description = element.getAttribute("data-description");

// Set the source of the full-size image to the URL of the image
document.getElementById("full-image").src = imageUrl;

// Get the image description from the "data-description" 
document.getElementById("full-image-description").innerHTML = description;

// Show the overlay
document.getElementById("overlay").style.display = "block";

// Attach the click event listener to the close button
document.querySelector(".close-button").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
});
}


// Attach a mouseover event listener to each element with the "image" class, so that the delayShowImage function is called when the user hovers over an image
document.querySelectorAll(".image").forEach(function(element) {
element.addEventListener("mouseover", function() {
delayShowImage(this);
});
});

// Attach a click event listener to the overlay, so that the user can close the full-size image by clicking outside the image
document.getElementById("overlay").addEventListener("click", function(event) {
if (event.target === this) {
document.getElementById("overlay").style.display = "none";
}
});


// reference-https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
const container = document.querySelector('.container');        
const random = document.querySelector('.random');        
 
// Add a click event listener to the random button
random.addEventListener('click',  function() {
 
let red = Math.random() * 255;
let green = Math.random() * 255;
let blue = Math.random() * 255;        
 
// Set the background color of the container to the randomly generated color
container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
 
 // Set the font color of the container to the randomly generated color
document.getElementById("full-image-description").style.color = `rgb(${red}, ${green}, ${blue})`;
 });


//reference-https://www.geeksforgeeks.org/allow-users-to-change-font-size-of-a-webpage-using-javascript/
var cont = document.getElementById("full-image-description");
    

//change font size
function changeSizeByBtn(size) {
    cont.style.fontSize = size + "px";
}

// Add a click event listener to the first element with the class name "btn1"
document.getElementsByClassName("btn1")[0].addEventListener("click", function() {
// Call the "changeSizeByBtn" function and pass font size of 10 pixels
    changeSizeByBtn("10");
});

document.getElementsByClassName("btn2")[0].addEventListener("click", function() {
    changeSizeByBtn("20");
});

document.getElementsByClassName("btn3")[0].addEventListener("click", function() {
    changeSizeByBtn("30");
});

// fotter js
let text = document.lastModified;
document.getElementById("time").innerHTML = text;
  