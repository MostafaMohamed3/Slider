var slider = document.querySelector(".overlay");
var sliderImg = document.querySelector(".overlay img");
var imgList = Array.from(document.querySelectorAll(".img-card img"));
var closeBtn = document.querySelector("#close");
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");
var currentSlideIndex = 0;

for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click" , function(e){
        currentSlideIndex = imgList.indexOf(e.target);
        slider.classList.replace("d-none" , "d-flex");
        sliderImg.setAttribute("src" , `${e.target.getAttribute("src")}`);
    });
};

closeBtn.addEventListener("click" , function(){
    slider.classList.replace("d-flex" , "d-none");
});

nextBtn.addEventListener("click" , function(){
    currentSlideIndex++;
    if(currentSlideIndex == imgList.length){
        currentSlideIndex = 0;
    };
    sliderImg.setAttribute("src" , `${imgList[currentSlideIndex].getAttribute("src")}`);
});

prevBtn.addEventListener("click" , function(){
    currentSlideIndex--;
    if(currentSlideIndex == -1){
        currentSlideIndex = imgList.length-1;
    };
    sliderImg.setAttribute("src" , `${imgList[currentSlideIndex].getAttribute("src")}`);
});