import lodash from "lodash";

const holidays = [
    {name: "christams", date: new Date("2025-12-25")},
    {name: "canada day", date: new Date("2025-07-01")},
    {name: "april fools", date: new Date("2025-04-01")},
]

let today = new Date();

holidays.forEach(holiday =>{
  let dateDifference =holiday.date - today;
  console.log(Math.ceil (dateDifference/(1000 * 60 *60 *24)));
});

let random_holiday = lodash.sample(holidays);
console.log(random_holiday);

console.log(lodash.findIndex(holidays, { name: "christams"}));
console.log(lodash.findIndex(holidays, { name: "canada day"}));
console.log(lodash.findIndex(holidays, {name: "April Fools"}))