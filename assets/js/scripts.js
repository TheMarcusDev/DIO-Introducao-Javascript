var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {    
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;   
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}   

if (currentNumber >= 10) {
    document.getElementById("buttonadd").disabled=true;
}
    else {
        document.getElementById("buttonadd").disabled=false;
}

if (currentNumber <= 0) {
    document.getElementById("buttonsub").disabled=true;
}
    else {
        document.getElementById("buttonsub").disabled=false;
}