const express = require("express");
const morgan = require("morgan");
const API = express();

// settings
API.set("port", process.env.PORT || 4000);

// middlewares
API.use(morgan("dev"));
API.use(express.urlencoded({ extended: false }));
API.use(express.json());

// routes
API.get("/", (req, res) => res.sendFile('index.html', { root: __dirname }));

// starting the server
API.listen(API.get("port"), () => {
  console.log(`Server on port ${API.get("port")}`);
});
