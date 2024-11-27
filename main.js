function getImageURL() {
    return [
        "i1.jpg",
        "i2.jpg",
        "i3.jpg",
        "i4.jpg",
        "i5.jpg",
        "i6.jpg"
    ];
}


let curIndex = 0;

function newSideSlides(n){
    let curSlide_1 = document.getElementById("image-left");
    if (n-1 < 0){
        curSlide_1.src = getImageURL()[getImageURL().length-1];
    }
    else{
        curSlide_1.src = getImageURL()[n-1]
    };

    let curSlide_2 = document.getElementById("image-right");
    if (n+1 < getImageURL().length-1){
        curSlide_2.src = getImageURL()[0];
    }
    else{
        curSlide_2.src = getImageURL()[n+1]
    };
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

    newSideSlides(curIndex);
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("pager").innerText = (curIndex + 1) + "/" + getImageURL().length;

    let button_1 = document.getElementById("button-1");
    button_1.addEventListener("click", function(){newSlides(-1)}); 

    let buttom_2 = document.getElementById("button-2");
    buttom_2.addEventListener("click", function(){newSlides(1)}); 
});
