var hrSpan = document.getElementById('hours');
var minSpan = document.getElementById('min');
var secSpan = document.getElementById('sec');
var ampmSpan = document.getElementById('ampm');
var dateDiv = document.getElementById('date');

function getCurrentTime() {
  var now = new Date();

  // ---- TIME ----
  var hours = now.getHours(); // 0–23
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // convert 24h to 12h
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 → 12

  // leading zero
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  hrSpan.innerText = hours;
  minSpan.innerText = minutes;
  secSpan.innerText = seconds;
  ampmSpan.innerText = ampm;

  // ---- DATE ----
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  var dayName = days[now.getDay()];
  var monthName = months[now.getMonth()];
  var date = now.getDate();
  var year = now.getFullYear();

  dateDiv.innerText = `${dayName}, ${date} ${monthName} ${year}`;
}

getCurrentTime(); // run once immediately
setInterval(getCurrentTime, 1000);