const slides = document.querySelectorAll('.slide')
const maxSlide = slides.length;
let curSlide = 0;
const nextBtn =
    document.querySelector('.next-btn')
const prevBtn =
    document.querySelector('.prev-btn')
const navWrapper = document.querySelector('.navbar-wrapper');
const hambuger = document.querySelector('.hamburger');
const menuClose = document.querySelector('.close-menu')
const navList = document.querySelector('.nav-list')

const goto = (slide)=>{slides.forEach(function(s, i){
  s.style.transform = `translateX(${100 * (i - slide)}%)`
 })
}

const background = (slide)=>{
   if(window.innerWidth > 426){
       navWrapper.style.background = `url(./images/desktop-image-hero-${slide}.jpg)` 
    }else if(window.innerWidth < 427){ 
    navWrapper.style.background = `url(./images/mobile-image-hero-${slide}.jpg)` 
    }
    
  }

  



background(0)
goto(0);

// navWrapper.style.background = `url(./images/desktop-image-hero-${0}.jpg)`

nextBtn.addEventListener('click', ()=>{
  if(curSlide === maxSlide - 1) {
    curSlide = 0;
    background(curSlide)
    // navWrapper.style.background = `url(./images/desktop-image-hero-${curSlide}.jpg)`
  } else {
    curSlide ++
    background(curSlide)
    // navWrapper.style.background = `url(./images/desktop-image-hero-${curSlide}.jpg)`
  }

  goto(curSlide)
  background(curSlide)
  //  navWrapper.style.background = `url(./images/desktop-image-hero-${curSlide}.jpg)`
})

prevBtn.addEventListener('click', ()=>{
  if(curSlide === 0){
    curSlide = maxSlide - 1
    background(curSlide)
    //  navWrapper.style.background = `url(./images/desktop-image-hero-${curSlide}.jpg)`
  }else{
    curSlide--
    background(curSlide)
    //  navWrapper.style.background = `url(./images/desktop-image-hero-${curSlide}.jpg)`
  }
  goto(curSlide)
  background(curSlide)
  //  navWrapper.style.background = `url(./images/desktop-image-hero-${curSlide}.jpg)`
})

hambuger.addEventListener('click', function(){
  navList.classList.add('active')
});

menuClose.addEventListener('click', function(){
  console.log('clicked');
  navList.classList.remove('active')
})
