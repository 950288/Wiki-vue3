import fs from "fs";
import ncp from 'ncp';

const { routes } = JSON.parse(fs.readFileSync("./src/routes.json"));

routes.forEach(route => {
    if (route.path === "/") return;
    const filename = route.path.substring(1);
    ncp('./dist/index.html', `./dist/${filename}`, err => {
      if (err) return console.error(err);
      console.log(`Copied index.html to /dist/${filename} !`);
    });
});
