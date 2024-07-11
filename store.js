function getProduct(){
    var product=[
        {image:"/images/alphabetGame.jpg",
        title:"Alphabet Game",
        discribtion:"It helps the child to focus and connect the shapes to the correct letters. The child can also play with the pieces as cubes and assemble them into different shapes.",
        price:"50$"},

        {image:"/images/numbersAndShapes.jpg",
        title:"Number-Shape Game",
        discribtion:"A 4-in-1 number learning toy for children that helps children learn counting, numbers, shapes, and colors. It contains many activities that help children develop their skills and enjoy their time. ﻿The game includes four different sets of cards with illustrations to help children recognize numbers, shapes and colours.",
        price:"50$"},

        {image:"/images/numbersAndShapes.jpg",
            title:"Number-Shape Game",
            discribtion:"A 4-in-1 number learning toy for children that helps children learn counting, numbers, shapes, and colors. It contains many activities that help children develop their skills and enjoy their time. ﻿The game includes four different sets of cards with illustrations to help children recognize numbers, shapes and colours.",
            price:"50$"},

        {image:"/images/numbersAndShapes.jpg",
            title:"Number-Shape Game",
            discribtion:"A 4-in-1 number learning toy for children that helps children learn counting, numbers, shapes, and colors. It contains many activities that help children develop their skills and enjoy their time. ﻿The game includes four different sets of cards with illustrations to help children recognize numbers, shapes and colours.",
            price:"50$"}
    ]
    return product;
}
var product = getProduct();



for(var i = 0;i<product.length;i++){
    draw(product[i]);
}

var arrOfCards=[];
function draw(data){
    var div = document.createElement("div");
    var img= document.createElement("img");
    var title=document.createElement("h3");
    var des=document.createElement("p");
    var price = document.createElement("h4");
    var but = document.createElement("button");
    

    
    
    img.src=data.image;
    title.innerText=data.title;
    des.innerText=data.discribtion;
    price.innerText=data.price;
    div.style.border="3px solid black";
    but.innerText="Add to cart"

    but.onclick=function(){
        arrOfCards.push(data);
        localStorage.setItem("Cards",JSON.stringify(arrOfCards));
    }


    div.append(img,title,des,price,but);
    var Div = document.getElementById("cards");
    Div.appendChild(div);
}


