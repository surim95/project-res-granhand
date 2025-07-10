const productSwiper = new Swiper ('.product_swiper',{
    //autoplay:{delay:10000},
    slidesPerView:1,
    spaceBetween:40,
    direction: 'vertical',
    loop:true,
    navigation:{
        nextEl:'.product_swiper .swiper-button-next',
    },
    scrollbar:{
        el:'.product_swiper .swiper-scrollbar',
    },
});