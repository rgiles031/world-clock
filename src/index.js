function updateLATime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");

    let losAngelesTime = moment.tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = `${losAngelesTime.format(
      "Do MMMM YYYY"
    )}`;
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function updateParisTime() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisTimeElement = parisElement.querySelector(".time");
    let parisDateElement = parisElement.querySelector(".date");

    let parisTime = moment.tz("europe/paris");

    parisDateElement.innerHTML = `${parisTime.format("Do MMMM YYYY")}`;
    parisTimeElement.innerHTML = `${parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function updateSydneyTime() {
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDateElement = sydneyElement.querySelector(".date");

    let sydneyTime = moment.tz("Australia/Sydney");

    sydneyDateElement.innerHTML = `${sydneyTime.format("Do MMMM YYYY")}`;
    sydneyTimeElement.innerHTML = `${sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
           <div class="city">
            <div>
              <h2>${cityName[1]}</h2>
              <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss [<small>]A[</small>]"
            )}</div>
          </div>
  `;
}

let citiesSelecctElement = document.querySelector("#city");

citiesSelecctElement.addEventListener("change", updateCity);

setInterval(updateLATime, 1000);
setInterval(updateParisTime, 1000);
setInterval(updateSydneyTime, 1000);
