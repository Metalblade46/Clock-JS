showClock =()=>{
 let time = new Date();
 let hr = time.getHours();
 let min = time.getMinutes();
 let sec = time.getSeconds();
 let hrEle = document.getElementsByClassName("hr")[0];
 let minEle = document.getElementsByClassName("min")[0];
 let secEle = document.getElementsByClassName("sec")[0];
 hrEle.style.transform = `rotate(${30* hr + min/2}deg)`;
 minEle.style.transform= `rotate(${6 * min + sec/10}deg)`;
 secEle.style.transform= `rotate(${6 * sec}deg)`;
 let digiEle = document.getElementsByClassName('digital')[0];
 digiEle.innerText = `${hr} : ${min} : ${sec}`;
 let sound = new Audio('./watch-single-tick.mp3');
 sound.play()
}
setInterval(showClock,1000);
setInterval(()=>{
let sound = new Audio('./mixkit-bells-of-mystery-581.wav')
},3600000)