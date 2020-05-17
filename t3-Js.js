var imgX = true;
//wining boolean
var winner = false;
//assigning table cells
const c1 = document.getElementById("div1");
const c2 = document.getElementById("div2");
const c3 = document.getElementById("div3");
const c4 = document.getElementById("div4");
const c5 = document.getElementById("div5");
const c6 = document.getElementById("div6");
const c7 = document.getElementById("div7");
const c8 = document.getElementById("div8");
const c9 = document.getElementById("div9");
//scores
const zo = document.getElementById("scoreO");
const zx = document.getElementById("scoreX");
//assigning buttons by className
const btn1 = document.getElementsByClassName("btns")[0];
//entering players names
setTimeout(function (){
  var person1 = prompt("Please enter player 1 name:", "Mathio");
  if (person1 != null && person1 != ""){
     document.getElementById("player1").innerText = person1;
   }
}, 200);
setTimeout(function (){
  var person2 = prompt("Please enter player 2 name:", "Tony");
  if (person2 != null && person2 != ""){
     document.getElementById("player2").innerText = person2;
   }
}, 200);
if (imgX === true){
   setTimeout(function (){document.getElementById("O").style.opacity = "10%";}, 1000);
   setTimeout(function (){document.getElementById("x").style.opacity = "100%";}, 1000);
}

function clicked(x) {
  const winner1 = document.getElementById("player1").innerText
  const winner2 = document.getElementById("player2").innerText
  if (x.style.backgroundSize == 0 && winner == false){
     //putting X or O
     if (imgX === true){
        x.style.backgroundImage = "url('images/x.jpg')";
        x.style.backgroundSize = "112px";
        imgX = false;
        document.getElementById("x").style.opacity = "10%";
        document.getElementById("O").style.opacity = "100%";
     } else {
       x.style.backgroundImage = "url('images/o.jpg')";
       x.style.backgroundSize = "112.1px";
       imgX = true;
       document.getElementById("O").style.opacity = "10%";
       document.getElementById("x").style.opacity = "100%";
     }
   }else {
     alert("You can't click here!");
   }

//player1 Wins conditions
   if (c1.style.backgroundSize == "112px" && c2.style.backgroundSize == "112px" && c3.style.backgroundSize == "112px" && winner == false) {
     setTimeout(function () {alert(winner1 + " WIN!!");}, 250);
     zx.innerText = Number(zx.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   } else if (c1.style.backgroundSize == "112px" && c5.style.backgroundSize == "112px" && c9.style.backgroundSize == "112px" && winner == false) {
     setTimeout(function () {alert(winner1 + " WIN!!");}, 250);
     zx.innerText = Number(zx.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c1.style.backgroundSize == "112px" && c4.style.backgroundSize == "112px" && c7.style.backgroundSize == "112px" && winner == false) {
     setTimeout(function () {alert(winner1 + " WIN!!");}, 250);
     zx.innerText = Number(zx.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c3.style.backgroundSize == "112px" && c5.style.backgroundSize == "112px" && c7.style.backgroundSize == "112px" && winner == false) {
     setTimeout(function () {alert(winner1 + " WIN!!");}, 250);
     zx.innerText = Number(zx.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c3.style.backgroundSize == "112px" && c6.style.backgroundSize == "112px" && c9.style.backgroundSize == "112px" && winner == false) {
     setTimeout(function () {alert(winner1 + " WIN!!");}, 250);
     zx.innerText = Number(zx.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c7.style.backgroundSize == "112px" && c8.style.backgroundSize == "112px" && c9.style.backgroundSize == "112px" && winner == false && winner == false) {
     setTimeout(function () {alert(winner1 + " WIN!!");}, 250);
     zx.innerText = Number(zx.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c4.style.backgroundSize == "112px" && c5.style.backgroundSize == "112px" && c6.style.backgroundSize == "112px" && winner == false) {
     setTimeout(function () {alert(winner1 + " WIN!!");}, 250);
     zx.innerText = Number(zx.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c2.style.backgroundSize == "112px" && c5.style.backgroundSize == "112px" && c8.style.backgroundSize == "112px" && winner == false) {
     setTimeout(function () {alert(winner1 + " WIN!!");}, 250);
     zx.innerText = Number(zx.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }
//player2 Wins conditions
   if (c1.style.backgroundSize == "112.1px" && c2.style.backgroundSize == "112.1px" && c3.style.backgroundSize == "112.1px" && winner == false) {
     setTimeout(function () {alert(winner2 + " WIN!!");}, 250);
     zo.innerText = Number(zo.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c1.style.backgroundSize == "112.1px" && c5.style.backgroundSize == "112.1px" && c9.style.backgroundSize == "112.1px" && winner == false) {
     setTimeout(function () {alert(winner2 + " WIN!!");}, 250);
     zo.innerText = Number(zo.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c1.style.backgroundSize == "112.1px" && c4.style.backgroundSize == "112.1px" && c7.style.backgroundSize == "112.1px" && winner == false) {
     setTimeout(function () {alert(winner2 + " WIN!!");}, 250);
     zo.innerText = Number(zo.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c3.style.backgroundSize == "112.1px" && c5.style.backgroundSize == "112.1px" && c7.style.backgroundSize == "112.1px" && winner == false) {
     setTimeout(function () {alert(winner2 + " WIN!!");}, 250);
     zo.innerText = Number(zo.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c3.style.backgroundSize == "112.1px" && c6.style.backgroundSize == "112.1px" && c9.style.backgroundSize == "112.1px" && winner == false) {
     setTimeout(function () {alert(winner2 + " WIN!!");}, 250);
     zo.innerText = Number(zo.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c7.style.backgroundSize == "112.1px" && c8.style.backgroundSize == "112.1px" && c9.style.backgroundSize == "112.1px" && winner == false) {
     setTimeout(function () {alert(winner2 + " WIN!!");}, 250);
     zo.innerText = Number(zo.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c4.style.backgroundSize == "112.1px" && c5.style.backgroundSize == "112.1px" && c6.style.backgroundSize == "112.1px" && winner == false) {
     setTimeout(function () {alert(winner2 + " WIN!!");}, 250);
     zo.innerText = Number(zo.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }else if (c2.style.backgroundSize == "112.1px" && c5.style.backgroundSize == "112.1px" && c8.style.backgroundSize == "112.1px" && winner == false) {
     setTimeout(function () {alert(winner2 + " WIN!!");}, 250);
     zo.innerText = Number(zo.innerText) + 1;
     btn1.removeAttribute("id");
     winner = true;

   }
}

//back Button
function back() {
  window.open("start.html")
}

//reset button
function reseting() {
  window.location.reload();
};

//play again button
function playGameAgain() {
     c1.style.removeProperty("background-image");
     c1.style.removeProperty("background-size");
     c2.style.removeProperty("background-image");
     c2.style.removeProperty("background-size");
     c3.style.removeProperty("background-image");
     c3.style.removeProperty("background-size");
     c4.style.removeProperty("background-image");
     c4.style.removeProperty("background-size");
     c5.style.removeProperty("background-image");
     c5.style.removeProperty("background-size");
     c6.style.removeProperty("background-image");
     c6.style.removeProperty("background-size");
     c7.style.removeProperty("background-image");
     c7.style.removeProperty("background-size");
     c8.style.removeProperty("background-image");
     c8.style.removeProperty("background-size");
     c9.style.removeProperty("background-image");
     c9.style.removeProperty("background-size");
     winner = false;
};
