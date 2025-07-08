const langBtn = document.querySelector('#lang_btn');
const langOption = document.querySelector('.lang_select');
console.log(langBtn, langOption)

langBtn.addEventListener('click',()=>{
    langOption.style.display = 'flex';
})