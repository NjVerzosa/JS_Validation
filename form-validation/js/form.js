function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var age = document.Form.age.value;
    var address = document.Form.address.value;
    var mobile = document.Form.mobile.value;
    var email = document.Form.email.value;
    var gender = document.Form.gender.value;
    

    var nameErr = ageErr = addressErr = mobileErr = emailErr = genderErr = true;
    

    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    
    if(age == "") {
        printError("ageErr", "Please enter your age");
        var elem = document.getElementById("age");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]+$/;                
        if(regex.test(age) === false) {
            printError("ageErr", "Please enter a valid age");
            var elem = document.getElementById("age");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("ageErr", "");
            ageErr = false;
            var elem = document.getElementById("age");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    // /^\s*\S+(?:\s+\S+){2}/
    // /^[a-zA-Z]\/[,]\+$/
    if(address == "") {
        printError("addressErr", "Please enter your address");
        var elem = document.getElementById("address");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z]\/[,]\+$/;                
        if(regex.test(address) === false) {
            printError("addressErr", "Please enter a valid address");
            var elem = document.getElementById("address");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("addressErr", "");
            addressErr = false;
            var elem = document.getElementById("address");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    




    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
            var regex = ^(09|\+63\d{9})$/;

        // var regex = /^[0-9]\d{12}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 11 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    
    

    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    
    
    if((nameErr || ageErr || addressErr || emailErr || mobileErr || genderErr) == true) {
       return false;
    } 
};