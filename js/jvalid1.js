function validate()
{  
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    var maths = parseFloat(document.getElementById('maths').value);
    var computer = parseFloat(document.getElementById('computer').value);
    var science = parseFloat(document.getElementById('science').value);
    var english = parseFloat(document.getElementById('english').value);
    var message ="";

    var tenth = document.getElementById('marks_ten').value;
  
    var message = "";

    if(!name)
    {
        alert("Please enter name");
        return false;
    }
    else if(!email)
    {
        alert("Please enter email");
        return false;
    }
    if(!maths && !computer && !science && !english ){
        alert("Please enter all marks");
        return false;
    }

    else{
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
