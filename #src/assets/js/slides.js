// main page main banner
$('.banner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill=""/><path d="M11 23H35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L35 23L23 35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle opacity="" cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill=""/><path d="M35 23L11 23" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 35L11 23L23 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
});

// about page slider
$('.about__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill=""/><path d="M11 23H35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 11L35 23L23 35" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none"><circle opacity="" cx="23" cy="23" r="23" transform="rotate(-180 23 23)" fill=""/><path d="M35 23L11 23" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 35L11 23L23 11" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
});

//main page partners 
$('.partners__items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                centerMode: true,
            }
        }
    ],
});

//event page gallery
$('.gallery__slider').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2.5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.5,
            }
        },
       
    ],
});

//sovetpage chrono
$('.chrono__slider').slick({
    slidesToShow: 6.2,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5.2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4.2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3.2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.3,
            }
        },
    ],
});

//sovetpage members
if($(window).width() > 768) {
    $('.members__items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
        prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
       
    });
}

//serv page slider
$('.serv__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: false
});