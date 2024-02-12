const movingElement = document.getElementById("movingElement");
const yesButton = document.getElementById("yes");

const acceptedDiv = document.getElementById("accepted");
const notAcceptedYetDiv = document.getElementById("notAcceptedYet");
const notAcceptedYetDescDiv = document.getElementById("notAcceptedDesc");

movingElement.addEventListener("click", function () {
  const computedStyle = window.getComputedStyle(yesButton);
  const noButtonStyle = window.getComputedStyle(movingElement);

  // Get the font size from the computed style
  const fontSize = computedStyle.getPropertyValue("font-size");
  const noButtonFontSize = noButtonStyle.getPropertyValue("font-size");
  const noButtonOpacity = noButtonStyle.getPropertyValue("opacity");
  const lineHeight = computedStyle.getPropertyValue("line-height");

  yesButton.style.fontSize = +fontSize.replace("px", "") + 6 + "px";
  yesButton.style.lineHeight = +lineHeight.replace("px", "") + 6 + "px";
  movingElement.style.fontSize = +noButtonFontSize.replace("px", "") - 3 + "px";
  movingElement.style.opacity = noButtonOpacity - 0.2;
  if (noButtonOpacity < 0.3) {
    movingElement.style.display = "none";
  }
});

const accept = () => {
  notAcceptedYetDiv.style.display = "none";
  notAcceptedYetDescDiv.style.display = "none";
  acceptedDiv.style.display = "block";
};

yesButton.addEventListener("click", accept);

let year = new Date().getFullYear();
let countDownDate = new Date(`Feb 14, ${year} 15:37:25`).getTime();

const dayHtml = document.getElementById("day");
const hourHtml = document.getElementById("hour");
const minuteHtml = document.getElementById("minute");
const secondHtml = document.getElementById("second");
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  //   set countdow to next year if current year's is expired
  if (countDownDate - now < 1) {
    countDownDate = new Date(`Feb 14, ${year + 1} 15:37:25`).getTime();
  }

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  console.log(distance);

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayHtml.innerHTML = days < 10 ? "0" + days : days;
  hourHtml.innerHTML = hours < 10 ? "0" + hours : hours;
  minuteHtml.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secondHtml.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}, 1000);
