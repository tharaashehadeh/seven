const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header-content h2');
const ldsspinner = document.querySelector('.lds-spinner');
const scrolltotop =document.querySelector('.scroll-to-top');
const welcome =document.querySelector('.welcome');
const annoyingbutton = document.querySelector('.annoying-button')


window.addEventListener('scroll',function(){
console.log(window.scrollY);
if(window.scrollY >= header.offsetTop){
   navbar.style.backgroundColor = "#fff"
}else{
   navbar.style.backgroundColor = "transparent"
}
if(window.scrollY > welcome.offsetTop){
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
 })

scrolltotop.addEventListener('click',function(){
   window.scroll({
      top:0,
      behavior:"smooth"
   })
 })

let section= document.querySelector(".about");
let spans =  document.querySelectorAll(".progress span");
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop -20){
       console.log("Reached Section Three");
       spans.forEach((span) => {
        span.style.width = span.dataset.width;
       
       });
    }
    };


    

 