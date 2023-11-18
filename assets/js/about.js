const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header-contentt h5');
const ldsspinner = document.querySelector('.lds-spinner');
const scrolltotop =document.querySelector('.scroll-to-top');
const resume =document.querySelector('.resume');
const annoyingbutton = document.querySelector('.annoying-button')
navbar.style.transition ='0.4s background-color'
window.addEventListener('scroll',function(){
console.log(window.scrollY);
if(window.scrollY >= header.offsetTop){
   navbar.style.backgroundColor = "#fff"
}else{
   navbar.style.backgroundColor = "transparent"
}

if(window.scrollY > resume.offsetTop){
   scrolltotop.classList.remove('opacity-0','invisible')
}
});
window.addEventListener('load',function(){
   setTimeout(function(){
      annoyingbutton.classList.remove('opacity-0','invisible')
      document.body.style.overflow = 'auto'
   },2000)
 });
window.addEventListener('load',function(){
   setTimeout(function(){
      ldsspinner.classList.add('opacity-0','invisible')
      document.body.style.overflow = 'auto'
   },2000)
 });
let desc= document.querySelectorAll(".desc .number");
let section= document.querySelector(".Our-Experience");
let started = false;
window.onscroll = function () {
if (window.scrollY >= section.offsetTop){
   if (!started){
    desc.forEach((number) => startCount(number));
   }
   started = true;
}
};
 function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() =>{
   el.textContent++;
   if (el.textContent == goal) {
    clearInterval(count)
   }

 }, 2000 / goal);
 let section= document.querySelector(".Our-Experiencee");
let spans =  document.querySelectorAll(".progress span");
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop +60){
       console.log("Reached Section Three");
       spans.forEach((span) => {
        span.style.width = span.dataset.width;
       
       });
    }
    
}

 };
 

