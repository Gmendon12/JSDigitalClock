

const setTime = () =>{

let sethours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById("seconds")
let ampn = document.getElementById("ampm")

let time = new Date();
    
// sethours.innerHTML =  time.getHours();
// minutes.innerHTML = time.getMinutes();
// seconds.innerHTML = time.getSeconds();
    
 
if(time.getHours() < 10){
    sethours.innerHTML = "0" + time.getHours();
}
if(time.getHours() > 9){
    sethours.innerHTML = time.getHours()
}
if(time.getHours() > 12){
    sethours.innerHTML = "0" + (time.getHours() - 12) ; 
}


if(time.getMinutes() < 10){
    minutes.innerHTML = "0" + time.getMinutes()
}
if(time.getMinutes() > 9){
    minutes.innerHTML = time.getMinutes();
}


if(time.getSeconds() < 10){
    seconds.innerHTML = "0" + time.getSeconds()
}
if(time.getSeconds() > 9){
    seconds.innerHTML = time.getSeconds();
}

if(time.getHours() <= 12 ){
    ampm.innerHTML = "AM"
}
if(time.getHours() > 12){
    ampm.innerHTML = "PM"
}

let changeText = document.getElementById('message');
let changetext2 = document.getElementById('goodmorning')
let image = document.getElementById('component');
let currenttime = new Date();

if(currenttime.getHours() >= 5 && currenttime.getHours() <= 11){
    changeText.innerHTML = " GRAB SOME HEALTHY BREAKFAST";
    changetext2.innerHTML = "GOOD MORNING"
    image.src = 'Capture.JPG'
}
if(currenttime.getHours() >= 12 && currenttime.getHours() < 16){
    changeText.innerHTML = "TIME FOR A HEALTHY LUNCH";
    changetext2.innerHTML = "GOOD AFTERNOON"
    image.src = 'Afternoon.jpg'
}
if(currenttime.getHours() >= 16 && currenttime.getHours() <= 20 ){
    changeText.innerHTML = "IT IS TEA TIME";
    changetext2.innerHTML = "GOOD EVENING"
    image.src = 'goodevening.jpg'
}
if(currenttime.getHours() > 20 && currenttime.getHours() <= 4){
    changeText.innerHTML = "HAVE DINNER AND GO TO BED"
    changetext2.innerHTML = "GOOD NIGHT"
    image.src = 'goodnight.webp'
}

}

setInterval(setTime, 1000);

var addbutton = document.getElementById('setalarmbutton');

let selectwakeup = document.getElementById("wakeup")
let setwakeup = document.getElementById("timing")

let selectlunch = document.getElementById('lunch');
let setlunch = document.getElementById('timing1');

let selectnap = document.getElementById('nap');
let setnap = document.getElementById('timing2')

let selectdinner = document.getElementById('night')
let setdinner = document.getElementById('timing3')

addbutton.addEventListener('click', function(){

    setwakeup.innerText = selectwakeup.options[selectwakeup.selectedIndex].text;
    setlunch.innerText = selectlunch.options[selectlunch.selectedIndex].text;
    setnap.innerText = selectnap.options[selectnap.selectedIndex].text
    setdinner.innerText = selectdinner.options[selectdinner.selectedIndex].text;
})

