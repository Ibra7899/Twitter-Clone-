//<=================== Sign in form 

document.getElementById("sign$In$Btn").onclick = function(){

    document.getElementById("sign$In").style.display = "block";
    document.getElementById("section1").style.position = "fixed";
}

document.getElementById("close$icon").onclick = function(){

    document.getElementById("sign$In").style.display = "none";
    document.getElementById("section1").style.position = "initial"
}

//<================ Sign Up form

document.getElementById("sign$Up$Btn").onclick = function(){

    document.getElementById("sign$Up").style.display = "block";
    document.getElementById("section1").style.position = "fixed";
}
document.getElementById("close$Sign$Up").onclick = function(){

    document.getElementById("sign$Up").style.display = "none";
    document.getElementById("section1").style.position = "initial";
}
