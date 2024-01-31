var swiper = new Swiper(".swiper-panorama", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    loopAddBlankSlides: true,
    speed: 600,
    spaceBetween: 0,
    mousewheel: true, 
    effect: "coverflow",
    coverflowEffect: {
        stretch: -5,
        rotate: 10,
        depth: -65,
        modifier: 2,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});