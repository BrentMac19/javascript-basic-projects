const btn = document.getElementById('btn');
const color = document.querySelector(".color");
let p1;
let p2;
let p3;

btn.addEventListener('click', function(){
   
    p1 = getRandomInt(255);
    p2 = getRandomInt(255);
    p3 = getRandomInt(255);
    console.log("rgb("+p1+","+p2+","+p3+")")
    color.textContent ="rgb("+p1+","+p2+","+p3+")";
    document.body.style.background = "rgb("+p1+","+p2+","+p3+")";
});

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}