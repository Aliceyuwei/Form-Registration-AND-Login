//登入

var enter = document.querySelector('#enter');
enter.addEventListener('click',send,false);
function send(e) {
    e.preventDefault();
    var email = document.querySelector('.email').value;
    console.log(email);
    var password = document.querySelector('.password').value;
    console.log(password);
    var account ={};
    account.email = email;
    account.password = password;
    console.log(account);
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('content-type', 'application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function () {
        console.log(xhr);
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var result = callbackData.message;
        if(result=="登入成功"){
            alert('恭喜你登入成功');
        }else if(result=="此帳號不存在或帳號密碼錯誤"){
            alert('oops,登入失敗');
        }else{
            alert('請檢查格式');
        }
    }

}

document.getElementById('back').onclick = function(){
    window.history.back();
}