
var img = document.getElementsByClassName("img");
var drop = document.getElementsByClassName("drop");
console.log(img);
img[0].style.display="block";
var slideIndex=1;
showSlide()
setInterval( showSlide, 2000);
function showSlide(){
    for(let i=0; i<img.length; i++){
        img[i].style.display="none";  
        drop[i].classList.remove("active");
        drop[i].classList.add("defaultbg");
    }
    if(slideIndex<img.length){
        img[slideIndex].style.display="block";
        drop[slideIndex].classList.remove("defaultbg");
        drop[slideIndex].classList.add("active");
        slideIndex++;
    }
    else{
        slideIndex=1;
        img[slideIndex-1].style.display="block";
        drop[slideIndex-1].classList.remove("defaultbg");
        drop[slideIndex-1].classList.add("active");
    
        
    }
}


