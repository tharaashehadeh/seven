const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header-content h5');
const ldsspinner = document.querySelector('.lds-spinner');
const scrolltotop =document.querySelector('.scroll-to-top');
const resume =document.querySelector('.resume ');
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
 
scrolltotop.addEventListener('click',function(){
   window.scroll({
      top:0,
      behavior:"smooth"
   })
 })