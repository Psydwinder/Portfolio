
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

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu'); /* Remove the show menu class when a link is clicked*/
}

navLink.forEach(n => n.addEventListener('click',linkAction))

/*==================EMAIL JS=================*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //serviceID - templateID - #form -publicKey
    emailjs.sendForm('service_l46fhs8','template_s19ix7t', '#contact-form', '6tOQu3mMOIuLVK2hk')
    .then(() => {
        //show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields
        contactForm.reset()
    }, () => {
       // show error message 
       contactMessage.textContent = 'Message not sent (service error) ❌'

    }) 
    
}

contactForm.addEventListener('submit', sendEmail); 

/*==================SHOW SCROLL UP=================*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the scrollUp class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
