const days = [
  {
    day: "Monday",
    opened: "12:00 - 22:00",
  },
  {
    day: "Tuesday",
    opened: "12:00 - 22:00",
  },
  {
    day: "Wednesday",
    opened: "12:00 - 22:00",
  },
  {
    day: "Thursday",
    opened: "12:00 - 22:00",
  },
  {
    day: "Friday",
    opened: "14:00 - 24:00",
  },
  {
    day: "Saturday",
    opened: "14:00 - 24:00",
  },
  {
    day: "Sunday",
    opened: "12:00 - 20:00",
  },
];

export function aboutpage() {
  //clearing content
  document.querySelector("#app").innerHTML = "";

  //creating/selecting elements
  const gridContainer = document.createElement("div");
  const hours = document.createElement("div");
  const contact = document.createElement("div");
  const location = document.createElement("div");
  const hoursTitle = document.createElement("h2");
  const contactTitle = document.createElement("h2");
  const locationTitle = document.createElement("h2");
  const telephone = document.createElement("p");
  const email = document.createElement("p");
  const app = document.querySelector("#app");
  const map = document.createElement("iframe");
  const locationInfo = document.createElement("div");
  const locationAddress = document.createElement("p");
  const locationName = document.createElement("p");
  const locationNumb = document.createElement("p");

  //adding properties to elements
  gridContainer.setAttribute("id", "grid-container");
  hours.className = "hours";
  contact.className = "contact";
  location.className = "location";

  //adding content to elements
  hoursTitle.textContent = "Visit Us";
  contactTitle.textContent = "Contact Us:";
  locationTitle.textContent = "Find Us";
  telephone.textContent = "Telephone: 555-666-777";
  email.textContent = "E-mail: lorem.ipsum@email.com";
  map.src =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2443.4333547394285!2d21.043689557218002!3d52.235511943525815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDE0JzA3LjgiTiAyMcKwMDInMzQuMyJF!5e0!3m2!1spl!2spl!4v1715006699226!5m2!1spl!2spl";
  locationAddress.textContent = "Poniatówka, Warszawa";
  locationName.textContent = "Lorem Ipsum,";
  locationNumb.textContent = `"52°14'07.8"N 21°02'34.3"E"`;

  //appending elements
  locationInfo.appendChild(locationName);
  locationInfo.appendChild(locationAddress);
  locationInfo.appendChild(locationNumb);
  hours.appendChild(hoursTitle);
  contact.appendChild(contactTitle);
  contact.appendChild(telephone);
  contact.appendChild(email);
  location.appendChild(locationTitle);
  location.appendChild(map);
  location.appendChild(locationInfo);
  gridContainer.appendChild(hours);
  gridContainer.appendChild(contact);
  gridContainer.appendChild(location);
  app.appendChild(gridContainer);

  //loop to get day from an array
  for (let i = 0; i < days.length; i++) {
    const weekday = document.createElement("p");

    weekday.className = "hour-text";

    weekday.textContent = `${days[i].day}: ${days[i].opened}`;

    hours.appendChild(weekday);
  }
}
