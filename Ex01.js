var date = new Date();
// console.log(date);
var today = date.getDay();
console.log(today);

if (today === 1) {
  console.log("Today is : Monday");
} else if (today === 2) {
  console.log("Today is : Tuesday");
} else if (today === 3) {
  console.log("Today is : Wednesday");
} else if (today === 4) {
  console.log("Today is : Thursday");
} else if (today === 5) {
  console.log("Today is : Friday");
} else if (today === 6) {
  console.log("Today is : Saturday");
} else if (today === 7) {
  console.log("Today is : Sunday");
}

var currentTimeHours = date.getHours();
var currentTimeMinut = date.getMinutes();
var currentTimeSeconds = date.getSeconds();

var prepand = currentTimeHours >= 12 ? "PM" : "AM";

if (currentTimeHours === 0 && prepand === " PM ") {
  if (currentTimeMinut === 0 && currentTimeSeconds === 0) {
    currentTimeHours = 12;
  } else {
    currentTimeHours = 12;
    prepand = " PM";
  }
}
if (currentTimeHours === 0 && prepand === " AM ") {
  if (currentTimeMinut === 0 && currentTimeSeconds === 0) {
    currentTimeHours = 12;
  } else {
    currentTimeHours = 12;
    prepand = " AM";
  }
}
console.log(
  "Current Time : " +
    currentTimeHours +
    prepand +
    " : " +
    currentTimeMinut +
    " : " +
    currentTimeSeconds
);
