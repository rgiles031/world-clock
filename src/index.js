function updateLATime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");

  let losAngelesTime = moment.tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = `${losAngelesTime.format("Do MMMM YYYY")}`;
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

setInterval(updateLATime, 1000);

function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisDateElement = parisElement.querySelector(".date");

  let parisTime = moment.tz("europe/paris");

  parisDateElement.innerHTML = `${parisTime.format("Do MMMM YYYY")}`;
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

setInterval(updateParisTime, 1000);
