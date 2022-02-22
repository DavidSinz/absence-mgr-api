const express = require("express");
const app = express();
const absencesData = require("./absences_data/absences.json");
const membersData = require("./absences_data/members.json");
let port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/", (req, res) => {
  const data = absencesData.map((a) => ({
    ...a,
    ...membersData.find((b) => b.userId === a.userId),
  }));
  res.send(data);
});

app.listen(port, () => {
  console.log(
    `Absence Manager API is listening on port http://localhost:${port}`
  );
});
