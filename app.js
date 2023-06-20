let search = prompt(`serch blood group`);

const alldonar = blooddonar.filter((donars) => donars.bloodGroup == search);

alldonar.map((don) => {
  if (don.lastDonad !== null) {
    console.log(
      `donar name ${don.name} blood group ${
        don.bloodGroup
      } last daonate ${daycount(don.lastDonad)}`
    );
  } else {
    console.log(`${don.name} this donar has no donate history`);
  }
});
let azads = `My, name is azad`;
let azad = `i am 29 years old`;
console.log(azad.substr(4, 2));

let da = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let ar = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
