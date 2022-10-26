//ser Inital Count 
let count = 0;

// Select value and buttons 
const value = document.querySelector('#value');
const backgrd = document.querySelector('main');
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btn){
    //console.log(btn);
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count=0;
        }

        if(count > 0){
            value.style.color = "green";
            backgrd.style.color = "orange";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#222";
        }

        value.textContent = count;
    });

});