//註冊

var enter = document.querySelector('#enter');
enter.addEventListener('click',send,false);
function send(e) {
      e.preventDefault();
      var email = document.querySelector('.email').value;
      var password = document.querySelector('.password').value;
      var account = {};
      account.email = email;
      account.password = password;
      var xhr = new XMLHttpRequest();
      xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
      xhr.setRequestHeader('content-type', 'application/json');
      var data = JSON.stringify(account);
      xhr.send(data);
      xhr.onload = function(){
          var callbackData = JSON.parse(xhr.responseText);
          console.log(callbackData);
          var result = callbackData.message;
          console.log(result);
          if(result=="帳號註冊成功"){
            alert('你註冊成功了');
          }else if(result=="此帳號已被使用"){
            alert('已有人使用喽!');
          }else{
            alert('請檢查格式');
          }
      }
}


//-------------------------------------------------
//AJAX JSON
// var account = {
//     email:'abddce@gmail.com',
//     password:'12345778'
// }

// var xhr = new XMLHttpRequest();
// xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
// xhr.setRequestHeader('Content-type','application/json');
// var data = JSON.stringify(account);
// xhr.send(data);
//----------------------------------------------------

//登入