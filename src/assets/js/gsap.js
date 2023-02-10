const laptopScreen = window.matchMedia('(min-width:992px)');
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

if(laptopScreen.matches== true) {
    
tl.fromTo(
    '.hero__title', 
 
    {
        x: -100,
        y: 100,
        // opacity: 0,
        scale:1
    },
  
    {
        x: 0,
        
        y: -0,
        duration: 1,
        scale: 1.1,
        opacity: 1,
    },

    {
        scrollTrigger:
         {
            trigger: '.title',
            toggleActions: 'restart none none play',
        

         },
   

    },
)
tl.fromTo(
    ".btn__wrapper", 
    {
        opacity: 0, 
        x:-300, y:300
    }, 
    {
        opacity: 0.8,
        x:0, 
        y:0, 
        duration: 1}
        );
tl.fromTo(
    '.hero__img',
    {
        // opacity: 0,
        x:300, y:300
    },
    {
        opacity: 0.8,
        x:0, y:0, 
        duration: 1}

),
tl.fromTo(
    '.menu__item .menu__link',
    {
        opacity:0,
        x:300, y:300
    },
    {
        opacity:1,
        x:0, 
        y:0, 
        stagger:0.15,
        duration: 1}

),
tl.fromTo(
    '.header__logo',
    {
        opacity: 0, 
        x:-300, 
        y:300,
    },
    {
        opacity: 0.8,
        x:0, 
        y:0, 
        duration: 1}

)
gsap.to('.hero__title',{
    scrollTrigger: {
        trigger: '.header__img',
        start : 'top top',
        scrub: true,  
       
    
    },
    xPercent:-100,
    yPercent: 300,
    scale:0.2, 
    opacity:0,

    
    
    
    
}
)
gsap.to('.hero__img',{
    scrollTrigger: {
        trigger: '.header__img',
        start : 'top top',
        scrub: true,  
       
    },
    xPercent:80,
    yPercent:75,
    scale:0, 
    opacity:0

    
    
}
)
//crafted scroll
gsap.to('.crafted__card',{
    scrollTrigger: {
        trigger: '.crafted__card',
        start : '30% center',
        end: '+=300px',
        scrub: true,  
        
    },
   
    transformOrigin:'left center',
    ease: 'none',
    scale:0, 
    opacity:0,
    stagger:2,  


    
    
}
)
//why scroll
gsap.to('.choose__content',{
    scrollTrigger: {
        trigger: '.choose__inner',
        start : 'top top',
        scrub: true,  
         },
    xPercent:-8,
    yPercent:75,
    scale:0.5, 
    stagger:0.25,
    opacity:0,


    
    
}
)
gsap.to('.choose__image img',{
    scrollTrigger: {
        trigger: '.choose__inner',
        start : 'top top',
        scrub: true,  
          },
    // xPercent:-80,
    // yPercent:75,
    scale:0.6, 
    
    opacity:0,   
    
}
)
//design__content
gsap.to('.design__content',{
    scrollTrigger: {
        trigger: '.design__inner',
        start : 'top top',
        scrub: true,  
    },
    xPercent:8,
    yPercent:50,
    scale:0.9, 
    // opacity:0,


    
    
}
)
gsap.to('.design__image',{
    scrollTrigger: {
        trigger: '.design__inner',
        start : 'top top',
        scrub: true,  
            },
    xPercent:0,
    yPercent:-80,
    scale:0.9, 
    // opacity:0,
}
)



//products
gsap.to('.products__card',{
    scrollTrigger: {
        trigger: '.products__card',
        start : '-30% center',
        end: '+=300px',
        scrub: true,  
        
    },
   
    transformOrigin:'left center',
    ease: 'none',
    scale: 0, 
    opacity:1,
    stagger:1,


    
    
}
)

//blog
gsap.to('.blog__card',{
    scrollTrigger: {
        trigger: '.blog__card',
        start : '120% bottom',
        end: '+=300px',
        scrub: true,  
        
    },
   
    transformOrigin:'left center',
    ease: 'none',
    scale:0, 
    opacity:1,
    stagger:1,  
    
}
)

//blog
gsap.to('.subscribe__image img',{
    scrollTrigger: {
        trigger: '.subscribe__inner',
        start : 'top top',
        end: '+=300px',
        scrub: true,  
        
    },
   
    transformOrigin:'left center',
    ease: 'none',
    scale:0, 
    opacity:1,
    
    
}
)


}
