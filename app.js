let colors =["green","red","rgb(150,150,150)","#f15025"];

let myClickMeButton = document.getElementById("clickButton");
let myContainer = document.getElementById("container");
let mySpan= document.getElementById("idColor");

myClickMeButton.addEventListener("click",function(){
    let randomColor = Math.floor(Math.random()*colors.length);
    myContainer.style.backgroundColor=colors[randomColor];
    mySpan.innerText=colors[randomColor];
    mySpan.style.color=colors[randomColor];
   
})


