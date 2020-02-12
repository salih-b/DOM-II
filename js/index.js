// Your code goes here
let Links = document.querySelector('nav');
Links.addEventListener("click", (event) => {
    console.log("stopped link");
    
    event.preventDefault();
  });
  // 1
  Links.addEventListener("mouseover", () => {
Links.style.textDecoration = 'underline';
  });
  //2
  Links.addEventListener("mouseleave", () => {
    Links.style.textDecoration = 'none';
      });
  let main_img = document.querySelector('.intro img');
  // 3
  main_img.addEventListener('dblclick', () => {
      main_img.style.transform = "scale(0.5)";
      main_img.style.transition = "all 0.5s";
  });
  // 4
  main_img.addEventListener('click', () => {
    main_img.style.transform = "scale(1)";
    main_img.style.transition = "all 0.5s";
});
let theText = document.querySelector('.text-content p');
// 5
theText.addEventListener('mouseenter', () => {
    theText.style.fontSize = "3rem";
    theText.style.transition = "all 0.5s";
});
theText.addEventListener("mouseleave", () => {
    theText.style.fontSize = '1.8rem';
      });
let theSignUp = document.querySelector('.btn');
// 6
theSignUp.addEventListener("wheel", () => {
alert("Wait! Sign up!");
      });
let imgOne = document.querySelector('.img-content img');
// 7
window.addEventListener("resize", () => {
    imgOne.src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  });
  var dragged;
  let imgTwo = document.querySelector('.rounded');
  // 8
    imgTwo.addEventListener("drag", function(event) {

}, false);
// 9
imgTwo.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
  }, false);
  // 10
  imgTwo.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  }, false);
  let dropspot = document.querySelector('.content-section');
  // 11
dropspot.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  // 12
  dropspot.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "content-section") {
      event.target.style.background = "beige";
    }
  
  }, false);


  dropspot.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "content-section") {
      event.target.style.background = "";
    }
  
  }, false);
  
  dropspot.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "content-section") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  }, false);
  
