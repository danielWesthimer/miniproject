const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("*", (req, res) => {
  const url = req.url;

  fs.readdir(`public${url}`, (err, files) => {
    if (err) res.status(404).send("is non faond");
    else {
      res.send(
        files.map((file) => {
          return {
            fileName: file,
            isDirectory: fs.lstatSync(`public/${url}${file}`).isDirectory(),
            size: fs.lstatSync(`public/${url}${file}`).size,
            birth: fs.lstatSync(`public/${url}${file}`).birthtime,
            path: url + file,
          };
        })
      );
    }
  });
});

router.put("*", (req, res) => {
  const url = req.url;
  
    fs.rename(`./public${url}`, `./public/${req.body.newName}`, function (err) {
      if (err) console.log("ERROR: " + err);
    });
  
});

router.delete("*", (req, res) => {
  const url = req.url;
  if (req.body.folder == "true") {
    fs.rmdir(`./public${url}`, function (err) {
      if (err) console.log("ERROR: " + err);
    });
  } else {
    fs.unlink(`./public${url}`, function (err) {
      if (err) console.log("ERROR: " + err);
    });
  }
});

router.post("*", (req, res) => {
  const url = req.url;
  fs.copyFile(`./public${url}`, `./public/${url}1`, function (err) {
    if (err) console.log("ERROR: " + err);
  });
});

module.exports = router;
