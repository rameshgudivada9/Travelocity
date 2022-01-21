
document.querySelector(".form").addEventListener("submit",formSubmit);
var arr=JSON.parse(localStorage.getItem("place")) || [];

function formSubmit(event){
  event.preventDefault();

  var place=document.querySelector(".inone").value;
  
  var obj={
        userName: place,
    
    };
    arr.push(obj);
    localStorage.setItem("place",JSON.stringify(arr));
        window.location.href="location.html";


}