//=======open nav func===============
// const input = document.querySelector('.input-text');
// const menuBtn = document.querySelector('.header-btn');

// menuBtn.addEventListener('click', ()=>{
//   input.classList.toggle('reSizeInput');
//   menuBtn.classList.toggle('hiden');
// })



const inputElement = document.querySelector(".input-text");
const menuButton = document.querySelector(".header-btn");
const linksElement = document.querySelector(".navbar__links");

inputElement.addEventListener('click', ()=> {
    inputElement.classList.toggle('input-toggle');
    menuButton.classList.toggle('hidden');
    linksElement.classList.toggle('transList');
    });
  

    

