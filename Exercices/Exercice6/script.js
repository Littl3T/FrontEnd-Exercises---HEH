// Constantes
const AvecSupp = document.getElementById('Supp');
const Sanssupp = document.getElementById('sansSupp');
const divSupplements = document.getElementById('SuppDiv');
const PizzaSelect = document.getElementById('Pizza');
const VisaPayement = document.getElementById('Visa');
const CheckboxSupp = document.getElementsByClassName('supp');
const TotalPriceOutput = document.getElementById('Total');
const RadioCash = document.getElementById('Cash');
const RadioVisa = document.getElementById('Visa');

const PizzaPrice = {
    "Margarita" : 8,
    "BBQChicken" : 10,
    "Aubergine" : 11
}

// Event listeners
document.addEventListener('DOMContentLoaded',TotalPrice);
AvecSupp.addEventListener('change',CheckSuppVisibility);
Sanssupp.addEventListener('change',CheckSuppVisibility);
AvecSupp.addEventListener('change',TotalPrice);
Sanssupp.addEventListener('change',TotalPrice);
RadioCash.addEventListener('change',TotalPrice);
RadioVisa.addEventListener('change',TotalPrice);
PizzaSelect.addEventListener('change',TotalPrice);
Array.from(CheckboxSupp).forEach(element => {
    element.addEventListener('change',TotalPrice);
})


// Functions
function CheckSuppVisibility(){
    if(AvecSupp.checked){
        divSupplements.style.display = 'block';
    }
    else {
        divSupplements.style.display = 'none';
        Array.from(CheckboxSupp).forEach(element => {
            element.checked = false 
        })
    }
}
function TotalPrice(){
    let BasePrice = PizzaPrice[PizzaSelect.value];
    let CashPrice = (VisaPayement.checked) ? 2: 0;
    let SupplementPrice = 0.0
    Array.from(CheckboxSupp).forEach(element => {
        if(element.checked){
            SupplementPrice = SupplementPrice +0.5
        }
    })
    TotalPriceOutput.textContent = BasePrice + CashPrice + SupplementPrice
}