// function fun1()
// {
//     var name = frm1.name.value;

//     var maths = parseFloat(frm1.maths.value);
//     var computer = parseFloat(frm1.computer.value);
//     var english = parseFloat(frm1.english.value);
//     var socialstudies = parseFloat(frm1.socialstudies.value);

//     var total = parseFloat(frm1.maths.value) + parseFloat(frm1.computer.value) + parseFloat(frm1.english.value) + parseFloat(frm1.socialstudies.value);

//     var percent = (total/4);
//     var highest = (Math.max(maths,english,computer,socialstudies));

//     if(maths==highest)
//     {
//         var subject = "Maths";
//     }
//     else if(english == highest){
//         var subject = "English";

//     }
//     else if(computer == highest)
//     {
//        var subject = "Computer";
//     }
//     else 
//     var subject = "SOcial Studies"


//     alert("Hello " + name+  " \n Your total marks is "+total+ " \n Your have got "+percent+"%" + "\n Your highest marks is " + highest+" in "+subject);
 
// }

function validate()
{
    // alert.log("hello")
    var name = frm1.name.value;
    var email = frm1.email.value;
    var gender = frm1.r1.value;
    var hobbies = getchecked("chk1");

 

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
    else if(gender == ""){
        alert("Please select gender");
        return false;

    }
    else if(hobbies == ""){
        alert("Please choose hobbies");
        return false;

    }
    else{
        alert("Success");
        return true;
    }

   
}

getchecked(field)
{
    let result = [];
    var h = document.getElementsByName(field);
    for( let i=0;i<h.length;i++)
    {
        if(h[i].checked)
        {
            result.push(h[i].value);
        }
       
    }
    return result;


}