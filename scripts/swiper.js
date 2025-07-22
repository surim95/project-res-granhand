const productSwiper = new Swiper ('.product_swiper',{
    //autoplay:{delay:10000},
    slidesPerView:1,
    spaceBetween:40,
    direction: 'vertical',
    loop:true,
    grabCursor: true,
    mousewheel: true, //마우스휠 활성화
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
    mousewheel: true,
    loop: true,
    navigation:{
        nextEl:'.set_slide > .swiper-button-next',
        prevEl:'.set_slide > .swiper-button-prev',
    },
})

const journalSwiper = new Swiper ('.journal_img',{
    /* autoplay:{
        delay:3000,
        disableOnInteraction: false,
    }, */
    effect: 'creative',
    slidesPerView: 'auto', // 슬라이드 크기 자동
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    speed: 400,
    initialSlide: 0,  // 첫 번째 슬라이드부터 시작
    navigation:{
        nextEl:'.journal_img > .swiper-button-next',
        prevEl:'.journal_img > .swiper-button-prev',
    },
    creativeEffect: {
        limitProgress:2,
        prev: {
            translate: ['-7%', '7%', -100],
            opacity:0.6,
        },
        next: {
            translate: ['7%', '7%', -200],
            opacity:0.6,
        },
    },
    on: {
        slideChange: function(){

        }
    }
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