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
    slidesPerView:'auto',
    spaceBetween: 80,
    loop: true,
    navigation:{
        nextEl:'.set_slide > .swiper-button-next',
        prevEl:'.set_slide > .swiper-button-prev',
    },
})

const journalSwiper = new Swiper ('.journal_img',{
    slidesPerView: 1,
    loop: true,
    navigation:{
        nextEl:'.journal_img > .swiper-button-next',
        prevEl:'.journal_img > .swiper-button-prev',
    },
    on: {
        slideChange: function() {
            console.log(this.realIndex);
        }
    }
})


const indexSwiper = new Swiper ('.index_contents', {
    slidesPerView: 1,
    spaceBetween: 90,
    loop:true,
    navigation:{
        nextEl:'.index_contents > .swiper-button-next',
        prevEl:'.index_contents > .swiper-button-prev',
    },
})