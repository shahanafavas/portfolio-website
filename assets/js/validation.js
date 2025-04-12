function validateform(){
 var name=document.forms["myform"]["name"].value;
 
 var name=document.forms["myform"]["email"].value;
 var name=document.forms["myform"]["subject"].value;
 var name=document.forms["myform"]["message"].value;
  if(name.trim()=="")
  {
    alert("must enter your name");
    return false;
  }
  else if(email.trim()=="")
    {
      alert("must enter your name");
      return false;
    }
  else if(subject.trim()=="")
        {
          alert("must enter your name");
          return false;
        }
   else if(message.trim()=="")
      {
          alert("must enter your name");
          return false;
     }
     return true;
}
