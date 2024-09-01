
function Starters() {
    var starter = document.getElementById("start");
    var breakfast = document.getElementById("break");
    var lunch = document.getElementById("Lunch");
    var dinner = document.getElementById("dinner");

    starter.style.display = "block";
    lunch.style.display = "none";
    breakfast.style.display = "none";
    dinner.style.display = "none";
    // console.log("work");
}
function Breakfast() {
    var starter = document.getElementById("start");
    var breakfast = document.getElementById("break");
    var lunch = document.getElementById("Lunch");
    var dinner = document.getElementById("dinner");

    starter.style.display = "none";
    lunch.style.display = "none";
    breakfast.style.display = "block";
    dinner.style.display = "none";
    // console.log("work");
}
function Lunch() {
    var starter = document.getElementById("start");
    var breakfast = document.getElementById("break");
    var lunch = document.getElementById("Lunch");
    var dinner = document.getElementById("dinner");

    starter.style.display = "none";
    lunch.style.display = "block";
    breakfast.style.display = "none";
    dinner.style.display = "none";
    // console.log("work");
}
function Dinner() {
    var starter = document.getElementById("start");
    var breakfast = document.getElementById("break");
    var lunch = document.getElementById("Lunch");
    var dinner = document.getElementById("dinner");

    starter.style.display = "none";
    lunch.style.display = "none";
    breakfast.style.display = "none";
    dinner.style.display = "block";
    // console.log("work");
}
// comment calling
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("main");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    console.log("hello");
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
