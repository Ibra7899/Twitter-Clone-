document.getElementById("logging$in$btn").onclick = ()=>{

    //get html elements
    var email = document.getElementById("logineamil").value;
    var password = document.getElementById("loginpassword").value;

    if(!email || !password){
        alert("Email and Password is required")
    }else{
        document.getElementById("logging$in$btn").style.display = "none";
        document.getElementById("loggin$in").style.display = "block";
        //invoke firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredentials)=>{
            alert('logging in successful');
            window.location.href = "index.html"
        })
        .catch((error)=>{
            console.log(error.message);
            document.getElementById("errormesage").innerHTML = error.message;
            document.getElementById("logging$in$btn").style.display = "block";
            document.getElementById("loggin$in").style.display = "none";

            setTimeout(()=>{
                document.getElementById("errormesage").style.display = "none";
            },5000)
        })
    }
}