
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2100 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for years, months, days, hours, minutes and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.2422));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.2422)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Synatx for textual output
  var yearsText = years == 1 ? " year, " : " years, "
  var daysText = days == 1 ? " day, " : " days, "
  var hoursText = hours == 1 ? " hour, " : " hours, "
  var minutesText = minutes == 1 ? " minute, " : " minutes, "
  var secondsText = seconds == 1 ? " second" : " seconds";

  // Display the result in the element with id="demo"
  document.getElementById("2100countdown").innerHTML = years + yearsText + days + daysText + hours + hoursText
  + minutes + minutesText + seconds + secondsText;
}, 1000);
