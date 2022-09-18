// const http = require("http");

// const handler = (request, response) => {
//   console.log("samlpe message");
//   response.end("Jakiś tekst");
// };
// const server = http.createServer(handler);
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Serwer działa na porcie ${port}`);
// });

// const express = require("express"); //nie korzystam już z http!!
// const app = express();
// const port = 3000;
// //gdy uzytkownik wchodzi na stronę główną
// app.get("/", function (req, res) {
//   res.send("Strona główna");
// });
// app.get("/podstrona1", function (req, res) {
//   res.send("Podstrona1");
// });

// app.listen(port, () => {
//   console.log(`Serwer działa na porcie ${port}`);
// });

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const zmienna = "podtytul";

app.set("view engine", "hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));

app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res) {
  res.render("index", {
    pageTitle: "tytul strony",
    subTitle: zmienna,
  });
});

app.get("/podstrona1", function (req, res) {
  res.send("Podstrona1");
});
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
