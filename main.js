var volume;       
var radius;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

function volume_sphere() {
    
    var patt = new RegExp("^[0-9]*$");

    radius = parseInt(document.getElementById("rad").value);
    console.log(patt.test(radius))
    if (patt.test(radius)) {
        
        if (canvas.width > radius*2) {  
            radius = Math.abs(radius);
            volume = (4/3) * Math.PI * Math.pow(radius, 3);
            volume = volume.toFixed(4);
            document.getElementById('vol').value = volume;
            ctx.beginPath();
            ctx.arc(150,150,radius,0,2*Math.PI);
            ctx.stroke();
        }
        
        else {
            alert("The circle is too large to draw!")
            document.getElementById("rad").value = "";
        }
    }
        
    else {
        alert("Please enter a number, idiot");
        document.getElementById("rad").value = "";
    }
}


var work = document.getElementById('calc');
var workButton = work.addEventListener("click", volume_sphere);

function clearCalc(){
        document.getElementById("rad").value = "";
        document.getElementById("vol").value = "";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var empt = document.getElementById('clearForm');
var emptButton = empt.addEventListener("click", clearCalc);