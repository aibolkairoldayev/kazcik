// main page main banner
$('.banner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
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
});