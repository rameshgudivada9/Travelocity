
document.querySelector("#form").addEventListener("submit",formsubmit);
var arr=JSON.parse(localStorage.getItem("data")) || [];

function formsubmit(event){
    event.preventDefault();

    var name=document.querySelector("#user").value;
    var pass=document.querySelector("#pass").value;

    for( var i=0;i<arr.length;i++){
        if(arr[i].userName==name && arr[i].passWord==pass){
            alert(`welcome ${name}`);
            window.location.href="index.html"
        }
        // else if(arr[i].userName!=name && arr[i].passWard==pass){
        //     alert("check username");
        // }
        // else if((arr[i].userName==name && arr[i].passWard!=pass)){
        //     alert("check password")
        // }
        // else{
        //     alert("sign up first")
        // }
    }

}