function jfun1()
{
    var txt1=document.getElementById("txt1").value;
    var txt2=document.getElementById("txt2").value;
    var em1=document.getElementById("em1").value;

    if(txt1=="" || txt2=="" || em1=="")
    {
        alert("Please enter the required fields");
        form1.txt1.focus();
    }
    else{
        alert("Thanks for connecting with us for LVC Courses!! Your respnse is saved..");
    }
}


function calculate()
{
    var per=document.getElementById("per");
    var maths=document.getElementById("maths").value;
    var cs=document.getElementById("cs").value;
    var s=document.getElementById("s").value;
    var tm=document.getElementById("tm");
    var mm=document.getElementById("mm");

    tm.value = eval(maths) + eval(s)+ eval(cs);
    per.value = tm.value / 3;
    if(eval(maths)>eval(cs) && eval(maths)>eval(s))
    {
        mm.value = eval(maths);
    }

    else if(eval(cs)>eval(s))
    {
        mm.value = eval(cs);
    }
    
    else{
        mm.value = eval(s);
    }

}

function subscribe()
{
    
    var x=prompt("Enter Your Email Id to Subscribe to our Channel");
}

