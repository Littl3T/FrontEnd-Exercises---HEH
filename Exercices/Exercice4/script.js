// Constantes
const TxtInput = document.getElementById('Name');

// Event Listener
    TxtInput.addEventListener('focusout',SratchCapitalize);

// Fonctions
function SratchCapitalize(){
    let firstLetter = TxtInput.value.charAt(0).toUpperCase();
    let txtwithoutfirst = TxtInput.value.substr(1);
    let Capitalized = firstLetter.concat(txtwithoutfirst);
    TxtInput.value = Capitalized;
}