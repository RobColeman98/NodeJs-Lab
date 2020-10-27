let path = require("path");
let fs = require("fs");
let request = require("request");
let dataPath = path.join(__dirname, "./downloads");
let options = {
    encoding: 'binary'
};

request("https://www.reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);
  let redditData = JSON.parse(body);
  redditData.data.children.forEach((item) => {
    let dataType = path.extname(item.data.url);
    if (err) console.log(err);
    if (dataType == ".jpg" || dataType == ".gif" || dataType == ".png") {
      request(item.data.url).pipe(fs.createWriteStream(`./downloads/${item.data.id}${dataType}`));
    } else {
      console.log("No!");
    }
  });
  fs.writeFileSync()
});
