//<==========================Sign up

document.getElementById("sign$Up$User").onclick = () => {

    // GET HTML ELEMENTS
    let email = document.getElementById("newemail").value;
    let password = document.getElementById("newpassword").value;

    if (!email || !password) {
        alert("please fill in all inputs")
    }
    else {
        document.getElementById("signingup").style.display = "block";
        document.getElementById("sign$Up$User").style.display = "none";
        // SIGN UP LOGIC HERE
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredentials) => {
            let user = userCredentials.user;
            let userId = user.uid;
            alert(userId)
        }).catch((error) => {
            document.getElementById("signingup").style.display = "none";
            document.getElementById("sign$Up$User").style.display = "block";
            console.log(error.message);
            document.getElementById("errormessage").innerHTML = error.message;
           setTimeout(()=>{
            document.getElementById("errormessage").style.display = "none";
           },5000) 
        })
    }

}