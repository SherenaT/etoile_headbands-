const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const ctrl = require("./controller");

app.post("/api/charlotte", ctrl.addCharItem);
app.post("/api/adelyn", ctrl.addAdeItem);
app.post("/api/sarah", ctrl.addSarItem);
app.post("/api/evangline", ctrl.addEvaItem);

app.listen(4000, () => console.log("Server running on 4000"));
