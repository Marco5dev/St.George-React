const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const multer = require("multer");
const expressip = require("express-ip");
const ejs = require("ejs");
const axios = require("axios");
const opn = require("opn");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jsonverse = require("jsonverse");
const cors = require("cors");
require("dotenv").config();

const db = new jsonverse();

// Import middleware and routers
const homeRouter = require("./routers/homeRouter");
const dashRouter = require("./routers/dashRouter");
const dataRouter = require("./routers/dataRouter");
const yearRouter = require("./routers/yearRouter");

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(logger("dev"));
app.use(expressip().getIpInfoMiddleware);
app.use(cookieParser("Marco5dev"));
app.use(
  session({
    secret: "Marco5dev",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routers
app.use("/", homeRouter);
app.use("/dash", dashRouter);
app.use("/data", dataRouter);
app.use("/api", yearRouter); // Use the yearRouter for routes starting with /years

// 404 Handler
app.use((req, res) => {
  const isPersistentLoggedIn =
    req.cookies["dashboard_login_persistent"] === "true";
  const isSessionLoggedIn = req.session.dashboard_login_session === true;
  // Determine the value of the "dashboard_login_persistent" cookie
  const dashboardLoginPersistentValue =
    req.cookies["dashboard_login_persistent"];
  res.status(404).render("404.ejs", {
    adminName: res.locals.adminName,
    isPersistentLoggedIn: isPersistentLoggedIn,
    dashboardLoginPersistentValue: dashboardLoginPersistentValue,
    title: "404 Not Found",
    description: "Sorry, we couldn't find that page.",
  });
});

// Server
app.listen(port, () => {
  console.clear();
  db.logSuccess(`Server is running on http://localhost:${port}`);
});
