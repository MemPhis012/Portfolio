new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 3,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    autoplayHoverPause: true,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }


});