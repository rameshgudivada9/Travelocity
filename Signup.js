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
for( var i=0;i<arr.length;i++){
    if(arr[i].userName==name && arr[i].emailAdd==email && arr[i].mobileNum==mobile && arr[i].passWord==pass){
      alert("Already have an account");
      window.location.href="login.html";
    }
else if(arr[i].userName=="" || arr[i].emailAdd=="" || arr[i].mobileNum=="" || arr[i].passWord==""){
  alert("please fill the details");

}
else{
alert("sign up sucess");

window.location.href="login.html";
}

}
}