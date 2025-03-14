const myImg = document.getElementById("Img")
myImg.addEventListener('click',function(event) {
    if(this.getAttribute('src') === 'Chevre1.jpg'){
       this.setAttribute('src','Chevre2.jpg') ;
    } else this.setAttribute('src','Chevre1.jpg');
    
})