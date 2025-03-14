// Constantes et éléments html
const article = document.getElementById('Article');
const ArticleInput = document.getElementById('Num');
const PriceInput = document.getElementById('Price');
const total = document.getElementById('TotalPrice');

// Event handler
document.addEventListener('DOMContentLoaded',CalculateTotalPrice)
ArticleInput.addEventListener('change',CalculateTotalPrice);
PriceInput.addEventListener('change',CalculateTotalPrice);

// Fonctions
function CalculateTotalPrice(){
    // Calcul du prix total
    let totalprice =  ArticleInput.value * PriceInput.value;
    total.innerText = totalprice;
    // Changement du texte si besoin au pluriel
    if(ArticleInput.value > 0){
        article.innerText = "Articles";
    } else article.innerText = "Article";
}