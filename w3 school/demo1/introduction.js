function htmlchange(){
    document.getElementById("Change").innerHTML="<h2 style='color:red;'>JS Can Change HTML Content<h2>";
}

function onlight(){
    document.getElementById("bulb").src="pic_bulbon.gif";
} 

function offlight(){
    document.getElementById("bulb").src="pic_bulboff.gif";
}

function changecss(){
    document.getElementById("changecss").style.color="red";
}

function displayhide(){
    document.getElementById("display").style.display="none";
}


function displayshow(){
    document.getElementById("display").style.display="block";
}