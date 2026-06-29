function updateDateTime()
{
    const now = new Date();
    document.getElementById("datetime").textContent = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

//used https://stackoverflow.com/questions/23994748/display-the-current-date-and-time-using-html-and-javascript-with-scrollable-effe

function checkpass()
{
    if (!validateDOB())
    {
        return false;
    }

    let userid = document.getElementById("userid").value.toUpperCase();
    let fname = document.getElementById("fname").value.toUpperCase();
    let lname = document.getElementById("lname").value.toUpperCase();
    let pass = document.getElementById("password").value;
    let repass = document.getElementById("repassword").value;
    
    let upperpass = pass.toUpperCase();
    //check for upper and lowercase letters, check for numbers, check for special character
    if (pass.includes('"') || pass.includes("'"))
    {
        alert("Password cannot contain quotes.");
        return false;
    }

    if(upperpass.includes(fname) || upperpass.includes(lname))
    {
        alert("Password cannot contain your first or last name.");
        return false;
    }

    if(upperpass === userid)
    {
        alert("Password cannot be the same as UserID.");
        return false;
    }

    if(upperpass.includes(userid))
    {
        alert("Password cannot contain your UserID.");
        return false;
    }

    if(!/[A-Z]/.test(pass))
    {
        alert("Password must contain at least one uppercase letter.");
        return false;
    }

    if(!/[a-z]/.test(pass))
    {
        alert("Password must contain at least one lowercase letter.");
        return false;
    }

    if(!/\d/.test(pass))
    {
        alert("Password must contain at least one number.");
        return false;
    }

    if(!/[!@#$%^&*()_\-+=\/<>.,`~]/.test(pass))
    {
        alert("Password must contain at least one special character.");
        return false;
    }

    if(pass !== repass)
    {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}

function finalUserID()
{
    let userid = document.getElementById("userid");
    userid.value = userid.value.toUpperCase();
}

function reviewinput()
//putting input into a form that can be read by html/ fixing the way it will be displayed/combined
{
    document.getElementById("reviewSection").style.display = "block";
    //put name together
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    
    document.getElementById("rname").innerHTML = fname + " " + mname + " " + lname;

    //DOB
    document.getElementById("rDOB").innerHTML = document.getElementById("dob").value;

    //SSN
    document.getElementById("rSSN").innerHTML = document.getElementById("ssn").value;

    //email
    document.getElementById("remail").innerHTML = document.getElementById("emailaddr").value;

    //phone
    document.getElementById("rphone").innerHTML = document.getElementById("phone").value;

    //put address together
    let address =
    document.getElementById("addrone").value + ", " +
    document.getElementById("city").value + ", " +
    document.getElementById("state").value + " " +
    document.getElementById("zip").value;

    document.getElementById("raddress").innerHTML = address;

    //emergency contct
    document.getElementById("remergency").innerHTML = document.getElementById("contactname").value +
    " (" + document.getElementById("contactnum").value + ") ";

    //reason
    document.getElementById("rreason").innerHTML = document.getElementById("reason").value;

    //gender
    let gender = document.querySelector('input[name="gender"]:checked');
    if(gender)
    {
        document.getElementById("rgender").innerHTML = gender.value;
    }

    //insured
    let insured = document.querySelector('input[name="insured"]:checked');
    if(insured)
    {
        document.getElementById("rinsured").innerHTML = insured.value;
    }

    //heard
    let heard = document.querySelector('input[name="heard"]:checked');
    if(heard)
    {
        document.getElementById("rheard").innerHTML = heard.value;
    }
}

function validateDOB()
    {
        const today = new Date();
        const dob = new Date(document.getElementById("dob").value);

        const oldest = new Date();
        oldest.setFullYear(today.getFullYear()-120);

        if (dob > today)
        {
            alert("Date of birth cannot be in the future.")
            return false;
        }

        if (dob < oldest)
        {
            alert("Date of birth cannot be more than 120 years ago.")
            return false;
        }
        return true;
    }

    function finalUserID()
    {
        let userid = document.getElementById("userid");
        userid.value = userid.value.toLowerCase();
    }

    function updateFeeling()
    {
        let value = document.getElementById("feeling").value;
        document.getElementById("feelingNum").innerHTML = Number(value).toLocaleString();
    }