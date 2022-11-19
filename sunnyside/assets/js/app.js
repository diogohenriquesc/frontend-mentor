const navToggleBtn = document.querySelector('.nav-toggle');
const navBar = document.querySelector('nav');

navToggleBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})