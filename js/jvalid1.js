function validate()
{  
    var message = "";
   
    var average_tw = (maths+computer+science+english)/4;

        if(tenth == 1 )
        {
            if(average_tw>=90)
               message = "Congratulations! You have recieved Scholarship of 50%";
            else if(average_tw<90 && average_tw>80)
                message = "Congratulations! You have recieved Scholarship of 25%";
            else
                message = "Sorry! You have not recieved Scholarship";
        }
            
        else if(tenth == 2)
        {
            if(average_tw>=90)
                message = "Congratulations! You have recieved Scholarship of 25%";
            else
                message = "Sorry! You have not recieved Scholarship";
        }
        else{
            message = "Sorry! You have not recieved Scholarship";
        }

        document.getElementById("message").innerHTML = message;
        return false;
    }
   


function focushandler(field)
{
   document.getElementById('errordiv'+field).remove();
}

function check(field)
{
   var f = document.getElementById(field);
    if(!f.value | f.value<0 | f.value>100)
    {
        f.classList.add("border-danger");
        let errormsg = document.createElement("div");
        errormsg.classList.add("errordiv");
        errormsg.id="errordiv"+field;
        errormsg.innerText="invalid option";
        f.after(errormsg);
        return false;
    }
    else 
    {
        f.classList.remove("border-danger");
        f.classList.add("border-success");
        return true;
    }
}


function validatecontact()
{
    // alert.log("hello")
    var name = frm1.name.value;
    var email = frm1.email.value;
 
    // var hobbies = getchecked("chk1");

    if(name == "")
    {
        alert("Please enter name");
        return false;
    }
    else if(email == "")
    {
        alert("Please enter email");
        return false;
    }
    else{
        alert("Success");
        return true;
    }
}
