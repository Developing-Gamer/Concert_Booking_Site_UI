const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginbtn = document.querySelector('.btnLogin-popup');
const closeBtn = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

loginbtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});