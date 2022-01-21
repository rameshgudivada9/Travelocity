document.querySelector("#form").addEventListener("submit",formsubmit);
var arr=JSON.parse(localStorage.getItem("carddetails")) || [];
function formsubmit(event){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var card=document.querySelector("#card").value;
    var cvv=document.querySelector("#cvv").value;
    var date=document.querySelector("#date").value;
    
var obj={
    userName: name,
    cardAdd: card,
    cvvNum: cvv,
    cardDate: date,
};
arr.push(obj)
localStorage.setItem("carddetails",JSON.stringify(arr));


window.location.href="otp.html";



}