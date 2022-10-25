const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
/* We are creating btn object that is attached to the btn ID that is found
    in the rainbow.html file */
/*This allows us to create a function for an event listener so we can change
    the background color for each time the user clicks the button */
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
let i =0;

//addEventListener()  attaches an event handler to the specifed Element
/*addEventListener() method attaches an event handler to an element without 
    overwriting exsiting even handlers
    
    You can add many event handlers to one element */
btn.addEventListener('click', function(){
    
    const rainbowColor = getRainbowColor();
    console.log(rainbowColor);
    document.body.style.backgroundColor = colors[rainbowColor];
    color.textContent =colors[rainbowColor];
});
function getRainbowColor(){
    let temp = i;
    if ( i <  colors.length){
        i += 1;
        return temp;
    }
    else{
        i=0;
        temp=0;
        return temp;
    }

}
