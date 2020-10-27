const path = require("path");
const fs = require("fs");
const request = require("request");
let chirpArr = [
  {
    name: "Robert",
    location: "Birmingham",
    mssg: "Mando season 2 is coming baby!!",
  },
  {
    name: "Josh",
    location: "Birmingham",
    mssg: "You Still have a lab due over the weekend",
  },
  {
    name: "Mike",
    location: "Birmingham",
    mssg: "I'm Excited for Mando 2 as well!",
  },
  {
    name: "Jessica",
    location: "Birmingham",
    mssg: "Baby Yoda is Bae!"
  },
  {
    name: "Daniel",
    location: "Hoover",
    mssg: "I'm just here for the memes",
  },
];
console.log(chirpArr)

let myJSON = JSON.stringify(chirpArr);
let dataPath = path.join(__dirname, "../chirps.json")


fs.writeFile("chirps.json", myJSON, function (err) {
    if (err) return console.log(err);
});

fs.readFile(dataPath,"utf8", (err, data) => {
    if(err) return console.log(err)
})

