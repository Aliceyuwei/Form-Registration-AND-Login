//登入

var enter = document.querySelector('#enter');
enter.addEventListener('click',send,false);
function send(e) {
    e.preventDefault();
    var email = document.querySelector('.email').value;
    console.log(email);
    var password = document.querySelector('.password').value;
    console.log(password);
}