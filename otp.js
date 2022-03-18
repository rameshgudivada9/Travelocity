
    document.querySelector("#form").addEventListener("submit",formsubmit);
    var arr=JSON.parse(localStorage.getItem("carddetails")) || [];
    
    function formsubmit(event){
        event.preventDefault();
        var pass=document.querySelector("#pass").value;
    
    
        if(pass="1234"){
            alert("your payment succuss");
        }
        else{
            alert(" incorrect OTP");
        }
        window.location.href="index.html";
    
    
    }