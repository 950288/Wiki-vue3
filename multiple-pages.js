import fs from "fs";
import ncp from 'ncp';

const routes = JSON.parse(fs.readFileSync("./src/heading.json"));

console.log(routes);

for (let key in routes) {
  if (key === "Home") continue;
  if (routes[key] == "") {
    copyFile(key);
  } else {
    for (let subkey in routes[key]) {
      copyFile(subkey);
    }
  }
}

function copyFile(filename) {
  filename = filename.toLowerCase().replace(' ', "-");
  ncp('./dist/index.html', `./dist/${filename}`, err => {
    if (err) return console.error(err);
    console.log(`Copied index.html to /dist/${filename} !`);
  });
}