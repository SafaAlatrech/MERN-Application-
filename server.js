const express = require("express");
const app = express();
const conectdb = require("./config/conectdb");

conectdb();
app.use(express.json());
app.use("/api/contacts", require("./routes/contacts"));

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
