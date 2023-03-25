const menuBtns = document.querySelectorAll('.menu-btns');
const subMenu = document.querySelectorAll('.sub-menu');
const fechasMenuBtns = document.querySelectorAll('.fechas-btns-menu');

menuBtns.forEach((btn) => {
    btn.addEventListener('click', (elemento) => {
        const elementoSelecionado = elemento.currentTarget;
        for(let i = 0; i < menuBtns.length; i++) {
            if(elementoSelecionado === menuBtns[i]) {
                subMenu[i].classList.toggle('ativa-sub-menu');
                menuBtns[i].classList.toggle('ativa-cor-btns-menu');
                fechasMenuBtns[i].classList.toggle('gira-fecha-btn-menu');
            }
            if(elementoSelecionado !== menuBtns[i]) {
                subMenu[i].classList.remove('ativa-sub-menu');
                menuBtns[i].classList.remove('ativa-cor-btns-menu');
                fechasMenuBtns[i].classList.remove('gira-fecha-btn-menu');
            }
        }
    })
});