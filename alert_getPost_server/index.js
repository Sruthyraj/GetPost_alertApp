const express = require("express");
const { List } = require("./db");
const dataservice = require("./dataservice");
const cors=require("cors")
const app = express();
app.use(
  cors({
    origin: "http://localhost:4200",
    credential: true,
  })
);

app.use(express.json());

app.post("/", (req, res) => {
  dataservice.getSave(req.body.item).then((result) => {
    res.status(result.statusCode).json(result);
    console.log(result.listitem);
  });
});

app.get("/", (req, res) => {
  dataservice.getPost(req.body.item).then((result) => {
    res.status(result.statusCode).json(result);
    console.log(result.listitem);
  });
});

app.patch("/:id", (req, res) => {
  dataservice.getUpdate(req).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.delete("/:id", (req, res) => {
  dataservice.getDelete(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.listen(4000, () => {
  console.log("server running");
});
