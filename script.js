var charater = 
document.getElementById("charater");
var block = document.getElementById("block");
function jump(){
    if(charater.classList != "animate"){
        charater.classList.add("animate");
    }
    setTimeout(function(){
        charater.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var charaterTop =
    parseInt(window.getComputedStyle(charater).
    getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && charaterTop>=130){
        block.style.animation = "none";
        block.style.display="none";
        alert("ya lost ladie");
    }
},10);
