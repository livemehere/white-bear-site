const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");
const openBtn = document.querySelector("#open-btn");
const mobileBtn = document.querySelector("#mobile-btn");


openBtn.addEventListener('click',()=>{
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    menu.classList.toggle('open');

})
closeBtn.addEventListener('click',()=>{
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    menu.classList.toggle('open');

})