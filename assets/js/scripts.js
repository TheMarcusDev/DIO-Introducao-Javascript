var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

_updateButtonsDisabledState();

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    _updateButtonsDisabledState();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    _updateButtonsDisabledState();
}

function _updateButtonsDisabledState() {
    var isAddDisabled = currentNumber >= 10;
    document.getElementById('buttonadd').disabled = isAddDisabled;
    var isSubDisabled = currentNumber <= 0;
    document.getElementById('buttonsub').disabled = isSubDisabled;

}

var eladd = document.getElementById("buttonadd");

eladd.addEventListener("click", increment);

var elsub = document.getElementById("buttonsub");

elsub.addEventListener("click", decrement);

