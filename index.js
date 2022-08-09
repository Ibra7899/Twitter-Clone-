document.getElementById("btn").onclick = function(){
    var tweet = document.getElementById("tweet").value;
    document.getElementById("message").innerText = tweet;
}