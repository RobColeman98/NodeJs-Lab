let fs = require("fs");
let request = require("request");
const { stringify } = require("querystring");
let path = require("path");

let dataPath = path.join(__dirname, "./reddit.json");
request("https://www.reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  let redditData = JSON.parse(body);

  let redditArr = [];
  redditData.data.children.forEach((item) => {
    redditArr.push({
      title: item.data.title,
      url: item.data.url,
      author: item.data.author,
    });
    // console.log(redditArr);
  });
  redditArr = JSON.stringify(redditArr);
  fs.writeFileSync(dataPath, redditArr);
});
