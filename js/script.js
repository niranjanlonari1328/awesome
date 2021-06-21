function validation(){

    var myname = document.getElementById("my-name").value;
    var id = document.getElementById("my-id").value;
    var message = document.getElementById("message-box").value;
    
    
    if(myname==""){
        document.getElementById("full-name").innerHTML="Name is required..!";
        return false;
    }
    
    if(id==""){
        document.getElementById("myemail").innerHTML="Email is required..!";
        return false;
    }
    
    if(message==""){
        document.getElementById("my-comment").innerHTML="Message is required..!";
        return false;
    }
    else{
        document.write("<h1>Your Response is Submited...!!!</h1>")
    }
    
    
    }