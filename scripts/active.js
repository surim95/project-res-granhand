
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(e) {
        if (a.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

/* 언어 설정 */
const langBtn = document.querySelector('#lang_btn');
const langOption = document.querySelector('.lang_wrap .lang_select');
const langOptionText = document.querySelectorAll('.lang_wrap .lang_select a');
const langArrow = document.querySelector('#lang_btn .lang_arrow');
//console.log(langBtn, langOption, langArrow, langOptionText)

let langBtnStatus = false;

langBtn.addEventListener('click',()=>{
    if (langBtnStatus) {
        langOption.style.display = 'none';
        langBtnStatus = false;
        langArrow.style.transform = 'scaleY(1)';
        
    } else {
        langOption.style.display = 'flex';
        langBtnStatus = true;
        langArrow.style.transform = 'scaleY(-1)';
    }
})


/* gnb 설정 */
const gnbText = document.querySelectorAll('.head_wrap .gnb li a');
const logoImg = document.querySelector('.logo h1 a img');
const logo = document.querySelector('.logo h1 a');
const headerLine = document.querySelector('.head_wrap');
const iconImg = document.querySelectorAll('.right_wrap a img');
////console.log(logo, gnbText, logoImg, headerLine, iconImg);
const header = document.querySelector('header');

gnbText.forEach((gnbTextAdd)=>{
    gnbTextAdd.addEventListener('mouseover',()=>{
        gnbTextAdd.style.textDecoration = 'underline';
    })
    gnbTextAdd.addEventListener('mouseout',()=>{
        gnbTextAdd.style.textDecoration = 'none';
    })
    /* 스크롤 위치에 따른 헤더 색상 반전 */
    window.addEventListener('scroll',()=>{
        const scrollY = window.scrollY;
        //console.log(window.scrollY);
        if (scrollY > 877) {
            gnbTextAdd.style.color = '#000';
            logoImg.src = './images/logo_b.png';
            headerLine.style.borderBottom = '1px solid #000';
            headerLine.style.background = 'rgba(255, 255, 255, 0.8)';
            iconImg.forEach((iconImgInvert)=>{iconImgInvert.style.filter = 'brightness(0)'});
            langBtn.style.filter = 'brightness(0)';
            langOption.style.background = 'rgba(255, 255, 255, 1)';
            langOption.style.border = '1px solid #000';
            langOptionText.forEach((langText)=>{langText.style.color = '#000';})
        } else {
            gnbTextAdd.style.color = '#fff';
            logoImg.src = './images/logo_w.png';
            headerLine.style.borderBottom = '1px solid #fff';
            headerLine.style.background = 'rgba(0, 0, 0, 0.2)';
            iconImg.forEach((iconImgInvert)=>{iconImgInvert.style.filter = 'brightness(1)'});
            langBtn.style.filter = 'brightness(1)';
            langOption.style.background = 'rgba(0, 0, 0, 0.8)';
            langOption.style.border = '1px solid #fff';
            langOptionText.forEach((langText)=>{langText.style.color = '#fff';})
        }
        if ((scrollY > 1720 && scrollY < 2643 || scrollY > 4794 && scrollY < 5357)) {
            header.style.display = 'none';
        } else {
            header.style.display = 'block';
        };
    });
});
/* 헤더 스크롤 이벤트 */
const sectionAll = document.querySelectorAll('main > section');
const storeGnb = document.querySelectorAll('.store_gnb > a');
//console.log(sectionAll, storeGnb);
gnbText.forEach((obj, idx)=>{
    obj.addEventListener('click',()=>{
        if (idx >= 2) {
            const idxM = idx + 1;
            window.scrollTo({
                top: sectionAll[idxM].offsetTop,
                behavior: 'smooth',
            })
        } else {
            window.scrollTo({
                top: sectionAll[idx].offsetTop,
                behavior: 'smooth',
            })
        }
    })
})
storeGnb.forEach((obj, idx)=>{
    obj.addEventListener('click',()=>{
        if (idx >= 2) {
            const idxM = idx + 1;
            window.scrollTo({
                top: sectionAll[idxM].offsetTop,
                behavior: 'smooth',
            })
        } else {
            window.scrollTo({
                top: sectionAll[idx].offsetTop,
                behavior: 'smooth',
            })
        }
    })
})
logo.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

/* shop filter 그라디언트 */
const defaultFilter = document.querySelectorAll('.filter li a');
const filter = document.querySelector('.filter');
//console.log(defaultFilter, filter);
/* shop product필터 */
const productWrap = document.querySelector('.product_swiper .swiper-wrapper');
const productPerfume = document.querySelectorAll('.product_swiper .prefume');
const productFragrance = document.querySelectorAll('.product_swiper .fragrance');
const productBody = document.querySelectorAll('.product_swiper .body');
const productNatural = document.querySelectorAll('.product_swiper .natural');
const productTool = document.querySelectorAll('.product_swiper .tool');
const productKomfor = document.querySelectorAll('.product_swiper .komfor');
//console.log(productPerfume, productFragrance, productBody, productNatural, productTool, productKomfor, productWrap);
/* 기본값 설정 */
productHide();
productPerfume.forEach(obj=>obj.style.display = 'flex');

defaultFilter.forEach((filterActive, idx)=>{
    filterActive.addEventListener('click',()=>{
        defaultFilter.forEach((del)=>{
            del.classList.remove('active_filter');
        })
        filterActive.classList.add('active_filter');
        gradientText();
        productHide();
        productSwiper.slideTo(0);
        if (idx === 0) {
            productPerfume.forEach(obj=>obj.style.display = 'flex');
        } else if (idx === 1) {
            productFragrance.forEach(obj=>obj.style.display = 'flex');
        } else if (idx === 2) {
            productBody.forEach(obj=>obj.style.display = 'flex');
        } else if (idx === 3) {
            productNatural.forEach(obj=>obj.style.display = 'flex');
        } else if (idx === 4) {
            productTool.forEach(obj=>obj.style.display = 'flex');
        } else {
            productKomfor.forEach(obj=>obj.style.display = 'flex');
        }
        productSwiper.update();
    })
})
function productHide(){
    productPerfume.forEach(obj=>obj.style.display = 'none');
    productFragrance.forEach(obj=>obj.style.display = 'none');
    productBody.forEach(obj=>obj.style.display = 'none');
    productNatural.forEach(obj=>obj.style.display = 'none');
    productTool.forEach(obj=>obj.style.display = 'none');
    productKomfor.forEach(obj=>obj.style.display = 'none');
}
/* 그라디언트 함수 */
function gradientText(){
    if (defaultFilter[0].classList.contains('active_filter')){
        filter.classList.add('filter_gradient1');
        filter.classList.remove('filter_gradient2');
        filter.classList.remove('filter_gradient3');
        filter.classList.remove('filter_gradient4');
        filter.classList.remove('filter_gradient5');
        filter.classList.remove('filter_gradient6');
    } else if (defaultFilter[1].classList.contains('active_filter')) {
        filter.classList.add('filter_gradient2');
        filter.classList.remove('filter_gradient1');
        filter.classList.remove('filter_gradient3');
        filter.classList.remove('filter_gradient4');
        filter.classList.remove('filter_gradient5');
        filter.classList.remove('filter_gradient6');
    } else if (defaultFilter[2].classList.contains('active_filter')) {
        filter.classList.add('filter_gradient3');
        filter.classList.remove('filter_gradient1');
        filter.classList.remove('filter_gradient2');
        filter.classList.remove('filter_gradient4');
        filter.classList.remove('filter_gradient5');
        filter.classList.remove('filter_gradient6');
    } else if (defaultFilter[3].classList.contains('active_filter')) {
        filter.classList.add('filter_gradient4');
        filter.classList.remove('filter_gradient1');
        filter.classList.remove('filter_gradient2');
        filter.classList.remove('filter_gradient3');
        filter.classList.remove('filter_gradient5');
        filter.classList.remove('filter_gradient6');
    } else if (defaultFilter[4].classList.contains('active_filter')) {
        filter.classList.add('filter_gradient5');
        filter.classList.remove('filter_gradient1');
        filter.classList.remove('filter_gradient2');
        filter.classList.remove('filter_gradient3');
        filter.classList.remove('filter_gradient4');
        filter.classList.remove('filter_gradient6');
    } else {
        filter.classList.add('filter_gradient6');
        filter.classList.remove('filter_gradient1');
        filter.classList.remove('filter_gradient2');
        filter.classList.remove('filter_gradient3');
        filter.classList.remove('filter_gradient4');
        filter.classList.remove('filter_gradient5');
    }
}
/* 제품 정렬 기준 */
const productAlign = document.querySelectorAll('.right_category a');
//console.log(productAlign);
productAlign.forEach((alignFilter)=>{
    alignFilter.addEventListener('click',()=>{
        productAlign.forEach((remove)=>{
            remove.classList.remove('active_category');
        })
        alignFilter.classList.add('active_category');
    })
})
/* 퍼퓸노트 버튼 */
const perfumeNoteBtn = document.querySelectorAll('.perfume_note_btn');

perfumeNoteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const note = btn.closest('.product').querySelector('.perfume_note');
        const img = btn.querySelector('img');
        if (note.style.display === 'none') {
            note.style.display = 'block';
            img.style.transform = 'scaleY(-1)';
        } else {
            note.style.display = 'none';
            img.style.transform = 'scaleY(1)';
        };
        setInterval(perfumeNoteTimer, 5000);
        function perfumeNoteTimer(){
            note.style.display = 'none';
            img.style.transform = 'scaleY(1)';
        }
    });
});
/* shop 장바구니 버튼 */
const shopCartBtn = document.querySelectorAll('.shop_cart_btn');
let shopCartAct = false;
shopCartBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if (shopCartAct) {
            btn.children[0].style.filter = 'invert(0)';
            shopCartAct = false;
        } else {
            btn.children[0].style.filter = 'invert(1)';
            shopCartAct = true;
        }
        
    })
});
/* wallpaper 이벤트 */
const wallPaperFront = document.querySelectorAll('.paper');

wallPaperFront.forEach((paper)=>{
    paper.addEventListener('mouseover',()=>{
        const wallPaperBack = paper.querySelector('.back');
        wallPaperBack.style.opacity = 1;
        const paperOut = paper.children[0];
        const paperOver = paperOut.children[0];
        paperOver.style.transform = 'scale(1.04)';
    })
    paper.addEventListener('mouseout',()=>{
        const wallPaperBack = paper.querySelector('.back');
        wallPaperBack.style.opacity = 0;
        const paperOut = paper.children[0];
        const paperOver = paperOut.children[0];
        paperOver.style.transform = 'scale(1)';
    })
})
/* journal 필터 */
const journalFilter = document.querySelectorAll('.journal_filter li');
for(let i of journalFilter){
    i.addEventListener('click',()=>{
        journalFilter.forEach((filter)=>{
            filter.classList.remove('journal_act');
        })
        i.classList.add('journal_act');
    })
}
/* index 필터 */
const indexFilter = document.querySelectorAll('.index_filter li');
const indexSwiperWrap = document.querySelector('.index_contents .swiper-wrapper');
/* index 필터링 */
const indexSignature = document.querySelectorAll('.index_contents .signature');
const indexPerfume = document.querySelectorAll('.index_contents .perfume');
const indexFragrances = document.querySelectorAll('.index_contents .fragrances');
const indexNatural = document.querySelectorAll('.index_contents .natural');
//console.log(indexSignature, indexPerfume, indexFragrances, indexNatural);
indexFilter.forEach((i, idx)=>{
    i.addEventListener('click',()=>{
        indexFilter.forEach((filter)=>{
            filter.classList.remove('index_act');
        })
        i.classList.add('index_act');
        indexAllRemove();
        if (idx === 0) {
            indexSignature.forEach(obj => indexSwiperWrap.appendChild(obj));
            indexPerfume.forEach(obj => indexSwiperWrap.appendChild(obj));
            indexFragrances.forEach(obj => indexSwiperWrap.appendChild(obj));
            indexNatural.forEach(obj => indexSwiperWrap.appendChild(obj));
        } else if (idx === 1) {
            indexSignature.forEach(obj => indexSwiperWrap.appendChild(obj));
        } else if (idx === 2) {
            indexPerfume.forEach(obj => indexSwiperWrap.appendChild(obj));
        } else if (idx === 3) {
            indexFragrances.forEach(obj => indexSwiperWrap.appendChild(obj));
        } else {
            indexNatural.forEach(obj => indexSwiperWrap.appendChild(obj));
        }
        indexSwiper.update();
    })
})
function indexAllRemove(){
    indexSignature.forEach(obj=>obj.remove());
    indexPerfume.forEach(obj=>obj.remove());
    indexFragrances.forEach(obj=>obj.remove());
    indexNatural.forEach(obj=>obj.remove());
}