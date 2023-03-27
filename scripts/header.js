const header = document.querySelector('header');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuBtns = document.querySelectorAll('.menu-btns');
const subMenu = document.querySelectorAll('.sub-menu');
const fechasMenuBtns = document.querySelectorAll('.fechas-menu-btns');
const acessarBlog = document.querySelector('.acessar-blog')
const abrirConta = document.querySelector('.abrir-conta')
const btnMobile = document.querySelector('.btn-mobile');
const fecharBtnMobile = document.querySelector('.fechar-btn-mobile');

menuBtns.forEach((btn) => {
    btn.addEventListener('click', (elemento) => {
        const elementoSelecionado = elemento.currentTarget;
        for(let i = 0; i < menuBtns.length; i++) {
            if(elementoSelecionado === menuBtns[i]) {
                subMenu[i].classList.toggle('mostrar-sub-menu');
                menuBtns[i].classList.toggle('mudar-cor-btns-menu');
                fechasMenuBtns[i].classList.toggle('girar-fecha-btns-menu');
            }
            if(elementoSelecionado !== menuBtns[i]) {
                subMenu[i].classList.remove('mostrar-sub-menu');
                menuBtns[i].classList.remove('mudar-cor-btns-menu');
                fechasMenuBtns[i].classList.remove('girar-fecha-btns-menu');
            }
        }
    })
});

btnMobile.addEventListener('click', () => {
    if (btnMobile.classList.contains('mostrar-elemento')) {
        btnMobile.classList.remove('mostrar-elemento');
        header.classList.add('header-100-porcento-vh');
        body.classList.add('remover-rolagem-body');
        fecharBtnMobile.classList.add('mostrar-elemento');
        menu.classList.add('mostrar-menu');
        acessarBlog.classList.add('mostrar-elemento')
        abrirConta.classList.add('mostrar-elemento');
    }
});

fecharBtnMobile.addEventListener('click', () => {
    if (fecharBtnMobile.classList.contains('mostrar-elemento')) {
        fecharBtnMobile.classList.remove('mostrar-elemento');
        header.classList.remove('header-100-porcento-vh');
        body.classList.remove('remover-rolagem-body');
        btnMobile.classList.add('mostrar-elemento');
        menu.classList.remove('mostrar-menu');
        abrirConta.classList.remove('mostrar-elemento');
        abrirConta.classList.remove('mostrar-elemento');
    }
});

