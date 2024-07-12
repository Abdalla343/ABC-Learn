var getData = JSON.parse(localStorage.getItem("Cards"));


function getcart(){
    for(var i=0;i<getData.length;i++){
        draw(getData[i]);
    }
}


document.getElementById("NumOfitems").innerHTML = `<div><h4>items (${getData.length})</h3></div>`;


function draw(data){
    var div = document.createElement("div");
    var img= document.createElement("img");
    var title=document.createElement("h3");
    var des=document.createElement("p");
    var price = document.createElement("h4");
    var but = document.createElement("button");
    
    //div.classList="card";
    img.src=data.image;
    title.innerText=data.title;
    des.innerText=data.discribtion;
    price.innerText=data.price;
    but.innerText="remove";
    
    //Dosen't work 
    but.onclick=function(){
        getData.splice(getData,1);
        console.log(getData);
        localStorage.setItem("Cards",JSON.stringify(getData));
        div.innerHTML="";
        document.getElementById("NumOfitems").innerHTML = `<div><h4>items (${getData.length})</h3></div>`;

    }
 
    div.append(img,title,des,price,but);
    var Div = document.getElementById("prod");
    Div.appendChild(div);
}

