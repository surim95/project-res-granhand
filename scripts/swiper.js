const productSwiper = new Swiper ('.product_swiper',{
    //autoplay:{delay:10000},
    slidesPerView:1,
    spaceBetween:40,
    direction: 'vertical',
    loop:true,
    navigation:{
        nextEl:'.product_wrap > .swiper-button-next',
    },
    scrollbar:{
        el:'.product_swiper > .swiper-scrollbar',
    },
});

const setSwiper = new Swiper ('.set_swiper',{
    //autoplay:{delay:10000},
    slidesPerView:'auto',
    spaceBetween: 80,
    loop: true,
    navigation:{
        nextEl:'.set_slide > .swiper-button-next',
        prevEl:'.set_slide > .swiper-button-prev',
    },
})

const journalSwiper = new Swiper ('.journal_img',{
    //autoplay:{delay:10000},
    effect: 'creative',
    slidesPerView: 1,
    loopAdditionalSlides: 1,
    rewind: true,
    navigation:{
        nextEl:'.journal_img > .swiper-button-next',
        prevEl:'.journal_img > .swiper-button-prev',
    },
    creativeEffect: {
        limitProgress:2,
        prev: {
            translate: [-48, 48, -2],
            opacity:0.3,
        },
        next: {
            translate: [-24, 24, -1],
            opacity:0.6,
        },
    },
    on: {
        slideChange: function () {
            console.log(this.realIndex);
        }
    },
})

const indexSwiper = new Swiper ('.index_contents', {
    //autoplay:{delay:10000},
    slidesPerView: 1,
    spaceBetween: 90,
    loop:true,
    navigation:{
        nextEl:'.index_contents > .swiper-button-next',
        prevEl:'.index_contents > .swiper-button-prev',
    },
})