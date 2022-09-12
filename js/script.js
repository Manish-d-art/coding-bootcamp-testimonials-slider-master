'user strict'

const slides=document.querySelectorAll('.slide');
const btnLeft=document.querySelector('.arrow-left');
const btnRight=document.querySelector('.arrow-right');


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

const prevSlide=function(){
    if(curSlide===0){
        curSlide=maxSlide-1;
    }else{
        curSlide--;
    }

    goToSlide(curSlide);
};

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);

//arrow key
document.addEventListener('keydown',function(e){
    e.key==='ArrowLeft' && prevSlide();
    e.key==='ArrowRight' && nextSlide();
})


