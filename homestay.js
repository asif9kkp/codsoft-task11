let image=document.querySelector(".image");
let images=['photo5.jpg','photo6.jpg','photo7.jpg','photo9.webp','photo10.jpg','photo4.jpeg','photo8.jpeg'];
setInterval(function(){
    let rendom=Math.floor(Math.random()*7);
    image.src=images[rendom];
},1200);

let input=document.querySelector("#img");
let inputs=['logo2.png','logo4.png','logo3.png','logo6.png','logo1.png','logo5.jpeg'];
setInterval(function(){
    let rendom=Math.floor(Math.random()*3);
    input.src=inputs[rendom];
},1500);
