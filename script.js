
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*==================SHOW MENU=================*/

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu');
    })
}

/*==================HIDE MENU=================*/

if (navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu');
})
}