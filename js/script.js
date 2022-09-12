'user strict'

const slides=document.querySelectorAll('.slide');
const leftBtn=document.querySelector('.arrow-left');
const rightBtn=document.querySelector('.arrow-right');


let curSlide=0;
const maxSlide=slides.length;

const goToSlide=function(slide){
    slides.forEach(function(s,i){
        // console.log(2);
            s.style.transform=`translateX(${100*(i-slide)}%)`;
        });
};
goToSlide(0);

const nextSlide=function(){
    if(curSlide===maxSlide-1){
        curSlide=0;
    }else{
        curSlide++;
    }

    goToSlide(curSlide);
};

