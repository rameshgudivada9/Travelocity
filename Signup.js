document.querySelector("#form").addEventListener("submit",formsubmit);
var arr=JSON.parse(localStorage.getItem("data")) || [];
function formsubmit(event){
    event.preventDefault();
    var name=document.querySelector("#user").value;
    var email=document.querySelector("#email").value;
    var mobile=document.querySelector("#mobile").value;
    var pass=document.querySelector("#pass").value;
    
var obj={
    userName: name,
    emailAdd: email,
    mobileNum: mobile,
    passWord: pass,
};
arr.push(obj)
localStorage.setItem("data",JSON.stringify(arr));
alert("sign up sucess")

window.location.href="login.html";
}