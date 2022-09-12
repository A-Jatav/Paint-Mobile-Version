var lastx = 0, lasty = 0;
var canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
var color = "black";
var lw = 1;
var screen_width = screen.width;
var psw = screen.width - 70;
var psh = screen.height - 300;
if(screen_width < 992){
    document.getElementById("canvas1").width = psw;
    document.getElementById("canvas1").height = psh;
/*    document.body.style.overflow = "hidden";*/
};
canvas.addEventListener("touchstart", touchstartfunc);

function touchstartfunc(e){
    color = document.getElementById("cti").value;
    lw = document.getElementById("widthti").value;
    lastx = e.touches[0].clientX - canvas.offsetLeft;
    lasty = e.touches[0].clientY - canvas.offsetTop;
};

canvas.addEventListener("touchmove", touchmovefunc);

function touchmovefunc(e){
    var currentx = e.touches[0].clientX - canvas.offsetLeft;
    var currenty = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    console.log("Last Position Of X: "+lastx+" Last Position Of Y: "+lasty);
    console.log("Current Position Of X: "+currentx+" Current Position Of Y: "+currenty);
    ctx.moveTo(lastx, lasty);
    ctx.lineTo(currentx, currenty);
    ctx.stroke();
    lastx = currentx;
    lasty = currenty;
};

function clearfunc(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}