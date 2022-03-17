(function(){
    const openButton = document.querySelector('.navMenu');
    const menu = document.querySelector('.navLink');
    const closeMenu = document.querySelector('.navClose');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('navLinkShow');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('navLinkShow');
    })
}())