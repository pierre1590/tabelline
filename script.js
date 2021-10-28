const btnShow = document.querySelector('#btn_show');
const btnDelete = document.querySelector('#btn_cancel');
const displayElem = document.querySelector('.show');
var stringa = ' ';


function updateDisplay(){
    displayElem.innerHTML = stringa;
}

function calcolaTabellina(){
    var numTabellina = document.getElementById('number').value;
    for(var i=0; i<11; i++){
        stringa += (i*numTabellina) + ' ';
        updateDisplay();
        displayElem.style.background = "#f01";
        displayElem.style.borderRadius = "30px";
        displayElem.style.padding = "10px";
        displayElem.style.textAlign = "center";
        displayElem.style.borderRadius = "30px";
        displayElem.style.fontSize = "30px";
    }
}


function cancellaTabellina(){
    stringa= '';
    updateDisplay();
    displayElem.style.background = "#fff";
}


btnShow.addEventListener('click',calcolaTabellina);
btnDelete.addEventListener('click',cancellaTabellina);

 

