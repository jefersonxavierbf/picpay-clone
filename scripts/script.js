const menuBtns = document.querySelectorAll('.menu-btns');
const subMenu = document.querySelectorAll('.sub-menu');

menuBtns.forEach(menuBtn => menuBtn.addEventListener('click', ativarSubMenu));

function ativarSubMenu(evento) {
    const clicouMenuBtn = evento.currentTarget
    for(let i = 0; i < subMenu.length; i++) {
        if(clicouMenuBtn === menuBtns[i]) {
            subMenu[i].classList.toggle('ativar-sub-menu');
        }
    }
    for(let i = 0; i < subMenu.length; i++) {
        if(clicouMenuBtn !== menuBtns[i]) {
            subMenu[i].classList.remove('ativar-sub-menu');
        }
    }
    
}