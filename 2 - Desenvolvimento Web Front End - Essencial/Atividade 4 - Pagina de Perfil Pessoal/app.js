
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5, // mostra 3 cards por vez
        spaceBetween: 20, // espaço entre eles
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });
});
