const express = require("express");
const app = express();
const routes = require("./route");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(8000, () => {
  try {
    console.log("server is live on");
  } catch (err) {
    console.log(`Server is not working due to ${err}`);
  }
});
