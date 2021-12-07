function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    
    var text;
    if(name.length <= 1){
      text = "Please enter valid name";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please enter valid phone number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.indexOf(".")== -1 || email.length < 6 ){
      text = "Please enter valid email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 0){
      text = "Please enter your message";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form was submitted successfully!");
    return true;
  }