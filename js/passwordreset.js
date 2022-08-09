document.getElementById("resetbtn").onclick = ()=>{
    alert("hello world")
    // get html elements 
    var email = document.getElementById("resetemail").value;

    // invoke firebase 
    firebase.auth().sendPassword 
}