


let colorsHex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

let myContainerHex = document.getElementById("containerHex");
let myClickMeButtonHex = document.getElementById("clickButtonHex");
let mySpanHex = document.getElementById("idColorHex");

myClickMeButtonHex.addEventListener("click",function(){
    let hexCode = "#";
    for(let i =0 ; i <6 ;i++){
        let myrandomHex = Math.floor(Math.random()*16);
        if(myrandomHex == 10){
            myrandomHex="a";
        }
        else if(myrandomHex == 11){
            myrandomHex="b";
        }
        else if(myrandomHex == 12){
            myrandomHex="c";
        }
        else if(myrandomHex == 13){
            myrandomHex="d";
        }
        else if(myrandomHex == 14){
            myrandomHex="e";
        }
        else if(myrandomHex == 15){
            myrandomHex="f";
        }
        hexCode = hexCode+myrandomHex;
    }
    myContainerHex.style.backgroundColor=hexCode;
    mySpanHex.innerText=hexCode;
    mySpanHex.style.color=hexCode;
})



