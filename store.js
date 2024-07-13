function getProduct() {
  var product = [
    {
      image: "/images/alphabetGame.jpg",
      title: "Alphabet Game",
      type:"games",
      discribtion:
        "It helps the child to focus and connect the shapes to the correct letters. The child can also play with the pieces as cubes and assemble them into different shapes.",
      price: "50$",
    },

    {
      image: "/images/numbersAndShapes.jpg",
      title: "Number-Shape Game",
      type:"games",
      discribtion:
        "A 4-in-1 number learning toy for children that helps children learn counting, numbers, shapes, and colors. It contains many activities that help children develop their skills and enjoy their time. ﻿The game includes four different sets of cards with illustrations to help children recognize numbers, shapes and colours.",
      price: "50$",
    },

    {
      image: "/images/Story1.jpg",
      title: "Words Game",
      type:"games",
      discribtion:
        "A 4-in-1 number learning toy for children that helps children learn counting, numbers, shapes, and colors. It contains many activities that help children develop their skills and enjoy their time. ﻿The game includes four different sets of cards with illustrations to help children recognize numbers, shapes and colours.",
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
  var des = document.createElement("p");
  var price = document.createElement("h4");
  var but = document.createElement("button");

  div.classList = "card";
  img.src = data.image;
  title.innerText = data.title;
  des.innerText = data.discribtion;
  price.innerText = data.price;
  div.style.border = "1px solid black";
  but.innerText = "Add to cart";

  but.onclick = function () {
    arrOfCards.push(data);
    localStorage.setItem("Cards", JSON.stringify(arrOfCards));
    console.log(arrOfCards);
  };
  div.append(img, title, des, price, but);
  var Div = document.getElementById("cards");
  Div.appendChild(div);
}
let arrFromStorage = JSON.parse(localStorage.getItem("Cards"));
if(arrFromStorage){
    arrOfCards = arrFromStorage;
}
console.log(arrFromStorage);


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
    var Div = document.getElementById("car  ds");
    Div.appendChild(div);
  }
}

var check=[];
check=document.getElementsByClassName("fi");
for(var i=0;check.length;i++){
console.log(check.value);
}
    for(var i = 0 ;i<check.length;i++){
        if(check[i].checked==true){
            console.log("sssss")
            var div =  document.getElementById("cards");
            div.innerHTML="";
            for(var j=0;j<product.length;j++){
            if(check.value==product[j].type){
                    console.log("success");
            }
        }
    }
}


// var gamesBut = document.getElementById("games")
// var booksBut = document.getElementById("Books")
// var storiesBut = document.getElementById("Stories")
// var div =  document.getElementById("cards");


//     div.innerHTML="";
//     for(var i=0;i<product.length;i++){
//         if(gamesBut.value==product.type)
//     }
