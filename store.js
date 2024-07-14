function getProduct() {
  var product = [
    {
      image: "/images/alphabetGame.jpg",
      title: "Alphabet Game",
      type:"games",
      price: "50$"
    },

    {
      image: "/images/numbersAndShapes.jpg",
      title: "Number-Shape Game",
      type:"games",
      price: "50$"
    },

    {
      image: "/images/wordGame.jpg",
      title: "Words Game",
      type:"games",
      price: "50$"
    },//sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    {
        image: "/images/Story1.jpg",
        title: "The Guardians of bore",
        type:"story",
        price: "50$"
      },
      {
        image: "/images/hippos play.jpg",
        title: "Hippos Play",
        type:"story",
        price: "50$"
      },
      {
        image: "/images/the cricket chirps.jpg",
        title: "Why the cricket chirps",
        type:"story",
        discribtion:
          "A 4-in-1 number learning toy for children that helps children learn counting, numbers, shapes, and colors. It contains many activities that help children develop their skills and enjoy their time. ﻿The game includes four different sets of cards with illustrations to help children recognize numbers, shapes and colours.",
        price: "50$",
      },
      {
        image: "/images/Gemma.jpg",
        title: "Gemma",
        type:"story",
        discribtion:
          "A 4-in-1 number learning toy for children that helps children learn counting, numbers, shapes, and colors. It contains many activities that help children develop their skills and enjoy their time. ﻿The game includes four different sets of cards with illustrations to help children recognize numbers, shapes and colours.",
        price: "50$",
      },
      {
        image: "/images/book1.jpg",
        title:"Math",
        type:"book",
        price: "50$"
      },
      {
        image:"/images/book2.jpg",
        title:"Back to school",
        type:"book",
        discribtion:
          "A 4-in-1 number learning toy for children that helps children learn counting, numbers, shapes, and colors. It contains many activities that help children develop their skills and enjoy their time. ﻿The game includes four different sets of cards with illustrations to help children recognize numbers, shapes and colours.",
        price: "50$",
      },
      {
        image:"/images/book3.jpg",
        title:"Learn to write",
        type:"book",
        price: "50$",
      }
  ];
  return product;
}
var product = getProduct();

for (var i = 0; i < product.length; i++) {
  draw(product[i]);
}

var arrOfCards = [];
function draw(data) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  var title = document.createElement("h3");
  var price = document.createElement("h4");
  var but = document.createElement("button");

  div.classList = "card";
  img.src = data.image;
  title.innerText = data.title;
  price.innerText = data.price;
  div.style.border = "1px solid black";
  but.innerText = "Add to cart";

  but.onclick = function () {
    arrOfCards.push(data);
    localStorage.setItem("Cards", JSON.stringify(arrOfCards));
    console.log(arrOfCards);
  };
  div.append(img, title, price, but);
  var Div = document.getElementById("cards");
  Div.appendChild(div);
}
let arrFromStorage = JSON.parse(localStorage.getItem("Cards"));
if(arrFromStorage){
    arrOfCards = arrFromStorage;
}



function search() {
  var flag = 0;
  var text = document.getElementById("searchProduct").value;
  var div = document.getElementById("cards");
  div.innerHTML = "";
  for (var i = 0; i < product.length; i++) {
    if (product[i].title.includes(text)) {
      draw(product[i]);
      flag = 1;
    }
  }
  if (flag == 0) {
    var p = document.createElement("h4");
    p.innerText = "NO Result";
    div.append(p);
    var Div = document.getElementById("cards");
    Div.appendChild(div);   
  }
}




function game(){
    var idcheck = document.getElementById("games");
    if(idcheck.checked==true){
        var div = document.getElementById("cards");
        div.innerHTML="";
    for(var i=0;i<product.length;i++){
        if(product[i].type=="games")
            draw(product[i])
        }
        
       
    }
        else{
        var div = document.getElementById("cards");
        div.innerHTML="";
        for(var i=0;i<product.length;i++)
            draw(product[i])
        }

    }
function story(){
    var idcheck = document.getElementById("Stories");
    if(idcheck.checked==true){
    var div = document.getElementById("cards");
    div.innerHTML="";
    for(var i =0 ; i<product.length;i++){
        if(product[i].type=="story")
            draw(product[i]);
    }
    }
    else{
        var div = document.getElementById("cards");
        div.innerHTML="";
        for(var i=0;i<product.length;i++){
            draw(product[i]);
        }
    }


}
function book(){
    var idcheck = document.getElementById("Books");
    if(idcheck.checked==true){
    var div = document.getElementById("cards");
    div.innerHTML="";
    for(var i =0 ; i<product.length;i++){
        if(product[i].type=="book")
            draw(product[i]);
    }
    }
    else{
        var div = document.getElementById("cards");
        div.innerHTML="";
        for(var i=0;i<product.length;i++){
            draw(product[i]);
        }
    }
}

function checkbox(){
var game1 = document.getElementById("games")
var Story1 = document.getElementById("Stories")
var book1 = document.getElementById("Books")
var div = document.getElementById("cards");

div.innerHTML="";
  if(game1.checked==true){
    var div = document.getElementById("cards");
    for(var i =0 ; i<product.length;i++){
        if(product[i].type=="games")
            draw(product[i]);
      }
}
//---------
  if(Story1.checked==true){
  var div = document.getElementById("cards");
  for(var i =0 ; i<product.length;i++){
    if(product[i].type=="story")
        draw(product[i]);
}
}
//-----------
if(book1.checked==true){
  var div = document.getElementById("cards");
  for(var i =0 ; i<product.length;i++){
      if(product[i].type=="book")
          draw(product[i]);
  }
  }


   if(game1.checked==false && Story1.checked==false && book1.checked==false){
    for(var i=0 ; i<product.length;i++) 
    draw(product[i]);
  }




}
