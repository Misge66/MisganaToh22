let menu = document.querySelector('.menu-icon')
let navToDisplay = document.querySelector('.nav-items')
menu.onclick =() => {
    navToDisplay.classList.toggle("display-menu");
    menu.classList.toggle("move");
};

window.onscroll = () => {
    navToDisplay.classList.remove("display-menu");
    menu.classList.remove("move");
};
// =====================================*************************==============================

var typed = new Typed(".skills", {
    strings:["Web Developer", "Frontend Developer", "Backend Developer"],
    typeSpeed: 300,
    BackSpeed: 100,
    backDelay: 2000,
    loop: true,
});

var typed = new Typed(".skills-2", {
    strings:["Web Developer", "Frontend Developer", "Backend Developer"],
    typeSpeed: 300,
    BackSpeed: 100,
    backDelay: 2000,
    loop: true,
});


// =================================**********************================================

$(document).ready(function(){

    nav = $('.nav');
    toggleCollpase = $('.toggle-collapse');

    /* click event on toggle menu */

    toggleCollpase.click(function(){
        nav.toggleClass('collapse');
    })
    // intialize owl courseal
    $('.owl-carousel').owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]

    });

    // AOS.init();

    // scrolling button to up
    $(window).scroll(function(){

        if(this.scrollY > 500){
            $('.scroll-up').addClass("show");
        }else{
            $('.scroll-up').removeClass("show");

        }

    });

    //slide-up script

    $('.scroll-up').click(function(){
        $('html').animate({
            scrollTop:0
        });
    });

});





// let toggleCollpase = document.querySelector(".toggle-collapse");
// let toggleIcons = document.getElementsByClassName("toggle-icons");
//  toggleCollpase.onclick = () => {
    //toggleCollpase.classList.toggle("collapse");
// };