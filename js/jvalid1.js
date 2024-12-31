function validate()
{  
    var fields = ['name','email','computer','maths','science', 'english'];
    var b = true;
    for(i =0;i<fields.length;i++)
    {
        b = b && check(fields[i]);   
    }
    var message = "";
    
    if(b)
    {
        var maths = document.getElementById('maths').value;
        var computer = document.getElementById('computer').value;
        var science = document.getElementById('science').value;
        var english = document.getElementById('english').value;
  
    var average_tw = (maths+computer+science+english)/4;
   
    var tenth = document.getElementById("marks_ten").value;

   
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

       
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();

        return false; 
        
    }
    else{
        return false;
        
    }
}

function validateregistration()
{
    const radioButtons = document.getElementsByName('r1');
    let selectedValue = null;
  
  for (const radio of radioButtons) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }

  const checkboxes = document.getElementsByName("chk1");
  let isChecked = false;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      isChecked = true;
    }
  });

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const dropdown = document.getElementsByName("s1")[0]; // Get the dropdown element
  const drop = dropdown.value;

  if(name == "")
  {
      alert("Please enter name");
      return false;
  }
  else if(email == "" )
  {
      alert("Please enter a valid mail empty");
      return false;
  }
  else if(!emailRegex.test(email)){
    alert("Please enter a valid mail!");
    return false;

  }
  else if(!selectedValue)
  {
    alert("Please select gender");
    return false;
  }
  else if(!drop)
    {
      alert("Please select a course");
      return false;
    }
  else if(!isChecked)
  {
    alert("Please select atleast one hobby");
    return false;
  }
  else{

    alert("success");
    alert(drop);
    return false;
  }
}
   
function check(field)
{

    console.log("Ff");
    

    if(document.getElementById('errordiv'+field))
        document.getElementById('errordiv'+field).remove();

 
    
   var f = document.getElementById(field);
    if(!f.value)
    {
        console.log("check " +f.value);
        
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
