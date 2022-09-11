'user strict'

const slides=document.querySelectorAll('.slide');
const leftBtn=document.querySelector('.arrow-left');
const rightBtn=document.querySelector('.arrow-right');

slides.forEach(function(slide,i){
// console.log(2);
    slide.style.transform=`translateX(${100*i}%)`;
});
