// Quesiton - 1 | Digital Clock
function showTime() {
    var date = new Date();
    var hour = date.getHours(); //0 - 23
    var min = date.getMinutes(); //0 - 59
    var sec = date.getSeconds(); //0 - 59
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hour + ":" + min + ":" + sec + " " + session;
    document.getElementById("clock-display").innerText = time;
    document.getElementById("clock-display").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();


// Question-2
function changeBg() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    var color = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.getElementsByClassName("dynamic-bg")[0].style = "background-color:" + color;

    setTimeout(changeBg, 2000);
}
changeBg();


// Question-3
function incSize() {
    document.getElementById("para-to-change").style = "font-size: 2rem";
}

function decSize() {
    document.getElementById("para-to-change").style = "font-size: 0.8rem";
}

// Question-4
function init(){
    imgObj = document.getElementById('car'); 
    imgObj.style.left = '0px';
}

function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 1 + 'px';
    animate = setTimeout('moveRight()', 10);

    if (parseInt(imgObj.style.left) >= 1300){
        stop(); 
    }
}

function stop(){
    clearTimeout(animate);
    imgObj.style.left = '0px';
}