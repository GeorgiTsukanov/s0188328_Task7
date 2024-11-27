function getImageURL() {
    return [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg"
    ];
}


let curIndex = 0;

function newSideSlides(){
    let curSlide_1 = document.getElementById("image-left");
    if ((curIndex-1) < 0){
        curSlide_1.src = getImageURL()[6];
    }
    else{
        curSlide_1.src = getImageURL()[curIndex-1];
    }

    let curSlide_2 = document.getElementById("image-right");
    if ((curIndex + 1) > (getImageURL().length-1)){
        curSlide_2.src = getImageURL()[0];
    }
    else{
        curSlide_2.src = getImageURL()[curIndex+1];
    }
}

function newSlides(n) {
    let curSlide = document.getElementById("image");
    curIndex = (curIndex + n) % getImageURL().length;
    if (curIndex < 0){
        curIndex = getImageURL().length-1;
    }
        curSlide.src = getImageURL()[curIndex];

    let pager = document.getElementById("pager");
    pager.innerText = (curIndex + 1) + "/" + getImageURL().length;

    newSideSlides();
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("pager").innerText = (curIndex + 1) + "/" + getImageURL().length;

    let button_1 = document.getElementById("button-1");
    button_1.addEventListener("click", function(){newSlides(-1)}); 

    let buttom_2 = document.getElementById("button-2");
    buttom_2.addEventListener("click", function(){newSlides(1)}); 
});
