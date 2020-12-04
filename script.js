const login = document.querySelector('.login');
const register = document.querySelector('.register');
const loginForm = document.querySelector('.loginForm');
const registerForm = document.querySelector('.registerForm');

registerForm.classList.add('displayNone');

login.addEventListener('click', (e)=>{
    e.preventDefault();

    register.style.color = 'rgb(194, 193, 193)';
    register.style.borderBottomColor = 'rgb(194, 193, 193)';

    login.style.color = 'rgb(54, 54, 54)';
    login.style.borderBottomColor = 'rgb(54, 54, 54)';


    registerForm.classList.add('displayNone');
    loginForm.classList.remove('displayNone');

});


register.addEventListener('click', (e)=>{
    e.preventDefault();

    register.style.color = 'rgb(54, 54, 54)';
    register.style.borderBottomColor = 'rgb(54, 54, 54)';

    login.style.color = 'rgb(194, 193, 193)';
    login.style.borderBottomColor = 'rgb(194, 193, 193)';

    registerForm.classList.remove('displayNone');
    loginForm.classList.add('displayNone');
    
});