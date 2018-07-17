const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const methodOverride = require("method-override");
const Snack = require("./db/snacks");

const app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors());

app.get("/api/snacks", (req, res) => {
  Snack.find()
    .then(snacks => {
      res.json(snacks);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/snacks", (req, res) => {
  Snack.create(req.body)
    .then(snacks => {
      res.json(snacks);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/api/snacks/:id", (req, res) => {
  Snack.findById(req.params.id)
    .then(snacks => {
      res.json(snacks);
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/api/snacks/:id", (req, res) => {
  Snack.findOneAndRemove({ _id: req.params.id }).then(() => {});
});

app.get("/api/snacks/edit/:id", (req, res) => {
  Snack.findOne({ _id: req.params.id }).then({});
});

app.put("/api/snacks/:id", (req, res) => {
  Snack.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then({});
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`ONLY WEAR DESIGNER ESSKEETIT 😤`);
  console.log(`HOPPIN OUT PORT ${app.get("port")} ESSKEETIT 🔥💯`);
});
