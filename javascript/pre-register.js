function validateRegisterform() {
    var email=document.getElementById('email').value;
    var username=document.getElementById('username').value;
    var password=document.getElementById('Password').value;
    var repeatPwd=document.getElementById('repeatPassword').value;
    var nation=document.getElementById('Nationality').value;
    var terms=document.getElementById('terms');

    if(email==""){
        alert("Email must be filled in.");
        return false;
    }

    else if(email!="") {
        var at=email.split('@');
        if(at.length!=2){
            alert("Email must contain one @ character");
            return false;
        }
        var p1=at[0];
        var p2=at[1];
        if(p1.length==0){
            alert("Must have letters before @");
            return false;
        }
        if (p1.split(" ").length>2){
            alert("Cannot consists of space.");
            return false;
        }
        var dot=p2.split(".");
        if(dot.length<2){
            alert("Email must have . character.");
            return false;
        } 
        if(dot[0].length==0){
            alert("Invalid Email pattern.")
        }
        if(dot[1].length<2){
            alert("Must contain letters after dot(.) ");
            return false;
        }
    }
    
    if(username==""){
        alert("Username must be filled in.");
        return false;
    }

    else if(username!=""){
        if(username.length<8){
            alert("Username must contain at least 8 characters.");
            return false;
        }
    }

    if(password==""){
        alert("Password must be filled in.");
        return false;
    }

    if(password!=""){
        if(password.length<6){
                alert("Password must contain at least 6 characters");
                return false;
        }
        if(password==username){
            alert("Username and Password must be different");
            return false;
        }
        var count=0;
        for(var i=0;i<password.length;i++){
            if(!isNaN(password[i])) count++;
            else count;
        }
        if(count==0) {
            alert('Password must contain at least one number.');
            return false;
        }
    }   

    //repeat password validate
    if(repeatPwd==""){
        alert("Repeat password must be filled in.");
        return false;
    }
    if(password!=repeatPwd){
        alert("Repeat password don't match.");
        return false;
    }

    //gender validate
    var gender = document.getElementsByName("gender");
    var valid = false;

    var i = 0;
    while (!valid && i < gender.length) {
        if (gender[i].checked) valid = true;
        i++;        
    }
    if (!valid) {
        alert("Gender must checked male or female");
        return false;
    }
    
    //dob validate 
    var dob=document.getElementById('dob').value;
    if(dob==""){
        alert("Please select your Date of Birth");
        return false;
    }

    //nationality validate
    if(nation==""){
        alert("Please select your Nationality");
        return false;
    }

    //terms validate
    if(!terms.checked){
        alert("Please check the terms & privacy.");
        return false;
    }

    con=confirm("Are you sure the want to register with this information?");
    if(con==true) {
        alert("You are now Xtreame Chaser's beta player.");
        return true;
    }
    else return false;
}

function rptpwd(){
    var repeatPassword=document.getElementById('repeatPassword').value;
    var password=document.getElementById('Password').value;
    if(password!=repeatPassword)
        document.getElementById('rptpwd').innerHTML="Password don't match!<br>";
    else if(password==repeatPassword)
        document.getElementById('rptpwd').innerHTML="Password match!<br>";
}