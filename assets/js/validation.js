function validateform(){

    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var Subject=document.myform.subject.value;
    var message=document.myform.message.value;
    if(name==null || name=="")
    {
        alert('Name box not be blank')
    }
        else if(subject==null || subject=="")
        {
            alert('Must give a subject')
        }
        else if(email){

        }
        else if(message==null || message=="")
        {
             alert('Must write a message')
        }
    }
