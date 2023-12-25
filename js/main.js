const typed = new Typed('#main-title', {
    strings: ['Ashraf Mohamed.', 'Full Stack developer.', 'youtuber.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
})

/*========= Section active =========*/
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');
        
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('header a[href*='+ sectionId +']').classList.add("active");
            }else{
                document.querySelector('header a[href*='+ sectionId +']').classList.remove("active");
            }
    })
}


window.addEventListener('scroll', scrollActive);
/*========= Section active =========*/


/*========= testimonials =========*/
const swiper = new Swiper(".mySwiper", {
    spaceBetween:30,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

/*========= testimonials =========*/

/*========= upBtn =========*/
let upBtn = document.querySelector('.upBtn');
window.addEventListener('scroll', function(){
    if(this.window.scrollY >= 120){
        upBtn.style.display = 'inline-flex';
    }else{
        upBtn.style.display = 'none';
    }
})
/*========= upBtn =========*/