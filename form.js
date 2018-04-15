//註冊

var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send('email=aabbccd@gmail.com&password=12345678');

xhr.onload = function () {
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText);
    console.log(str.message);
    if(str.message=="帳號註冊成功"){
       alert('恭喜你註冊成功');
    }else if(str.message=="此帳號已被使用"){
        alert('此帳號已有人使用喽!');
    }
    else{
        alert('格式打錯了!');
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