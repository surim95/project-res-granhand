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
    /* effect: 'fade', */
    slidesPerView: 1,
    spaceBetween: -1000,
    loop: true,
    navigation:{
        nextEl:'.journal_img > .swiper-button-next',
        prevEl:'.journal_img > .swiper-button-prev',
    },
    on: {
        slideChange: function() {
            if (this.realIndex == 0){
                console.log('0입니다.');
                this.slides[0].style.zIndex = '50';
                this.slides[1].style.zIndex = '49';
                this.slides[2].style.zIndex = '48';
                this.slides[1].style.transform = 'translateY(0)';
                this.slides[1].style.transform = 'translateY(-20px)';
                this.slides[2].style.transform = 'translateY(-40px)';
            } else if (this.realIndex == 1) {
                console.log('1입니다.');
                this.slides[1].style.zIndex = '50';
                this.slides[2].style.zIndex = '49';
                this.slides[0].style.zIndex = '48';
                this.slides[1].style.transform = 'translateY(0)';
                this.slides[2].style.transform = 'translateY(-20px)';
                this.slides[0].style.transform = 'translateY(-40px)';
            } else {
                console.log('2입니다.');
                this.slides[2].style.zIndex = '50';
                this.slides[0].style.zIndex = '49';
                this.slides[1].style.zIndex = '48';
                this.slides[2].style.transform = 'translateY(0)';
                this.slides[0].style.transform = 'translateY(-20px)';
                this.slides[1].style.transform = 'translateY(-40px)';
            }
            /* console.log(this.activeIndex); */
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