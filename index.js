const express = require("express");
const app = express();
const absencesData = require("./absences_data/absences.json");
const membersData = require("./absences_data/members.json");
let port = process.env.PORT || 3000;

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
