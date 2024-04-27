const bodyElement = document.body; // Captura o Body
const abrirMenuMobile = document.getElementById('abrirMenuMobile'); // Captura o botão de abrir o menu
const fecharMenuMobile = document.getElementById('fecharMenuMobile'); // Captura o botão de fechar o menu
const menuLinks = document.querySelectorAll('#menu li a'); // Captura todos os links do menu

abrirMenuMobile.addEventListener('click', abrirMenu); // Adiciona evento ao botão de abrir o menu
fecharMenuMobile.addEventListener('click', fecharMenu); // Adiciona evento ao botão de fechar o menu

// Adiciona o ouvinte de evento a cada link dentro do menu
for (const link of menuLinks) {
    link.addEventListener('click', () => {
        fecharMenu(); // Fecha o Menu ao Clicar no Link
    });
}

// Função para abrir o menu
function abrirMenu(){
    bodyElement.style.overflow = 'hidden'; // Trava o Body
    menu.classList.add('menu-responsive'); // Adiciona classe do Menu Responsivo
    abrirMenuMobile.classList.add('abrir-menu-responsive'); // Adiciona classe do Abrir Menu Responsivo
    fecharMenuMobile.classList.add('fechar-menu-responsive'); // Adiciona classe do Fechar Menu Responsivo
}

// Função para fechar o menu
function fecharMenu(){
    bodyElement.style.overflow = 'auto'; // Reseta o Overflow no Body
    menu.classList.remove('menu-responsive'); // Remove classe do Menu Responsivo
    abrirMenuMobile.classList.remove('abrir-menu-responsive'); // Remove classe do Abrir Menu Responsivo
    fecharMenuMobile.classList.remove('fechar-menu-responsive'); // Remove classe do Fechar Menu Responsivo
}
