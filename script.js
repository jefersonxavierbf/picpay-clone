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

btnMobile.addEventListener('click', () => {
    if (btnMobile.classList.contains('ativar')) {
        btnMobile.classList.remove('ativar');
        header.classList.add('ativar-altura-menu');
        body.classList.add('removerRolagem');
        fecharBtnMobile.classList.add('ativar');
        menu.classList.add('ativar-flex');
        acessarBlog.classList.add('ativar')
        abrirConta.classList.add('ativar');
    }
});

fecharBtnMobile.addEventListener('click', () => {
    if (fecharBtnMobile.classList.contains('ativar')) {
        fecharBtnMobile.classList.remove('ativar');
        header.classList.remove('ativar-altura-menu');
        body.classList.remove('removerRolagem');
        btnMobile.classList.add('ativar');
        menu.classList.remove('ativar-flex');
        abrirConta.classList.remove('ativar');
        abrirConta.classList.remove('ativar');
    }
});

