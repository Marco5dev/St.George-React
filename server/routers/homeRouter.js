const express = require("express");
const router = express.Router();
const jsonverse = require("jsonverse");
const cookieParser = require("cookie-parser");

const db = new jsonverse();

// Middleware to load common data for rendering views
router.use(async (req, res, next) => {
  try {
    const adminId = req.cookies["dashboard-user"];
    if (adminId) {
      const userData = await db.findByID(adminId);
      if (userData) {
        res.locals.adminName = userData.name;
      }
    }

    next();
  } catch (err) {
    db.logError(err);
    res.status(500).render("500-2.ejs", {
      adminName: res.locals.adminName,
      isPersistentLoggedIn:
        req.cookies["dashboard_login_persistent"] === "true",
      dashboardLoginPersistentValue: req.cookies["dashboard_login_persistent"],
      title: "500 Internal server error",
      description: "Sorry, something went wrong. Please try again later.",
    });
  }
});

// Home route
router.get("/", async (req, res) => {
  try {
    const isPersistentLoggedIn =
      req.cookies["dashboard_login_persistent"] === "true";
    const dashboardLoginPersistentValue =
      req.cookies["dashboard_login_persistent"];

    const [d2021, d2022, fathersData] = await Promise.all([
      db.readData("2021"),
      db.readData("2022"),
      db.readData("Fathers"),
    ]);

    res.render("index.ejs", {
      adminName: res.locals.adminName,
      isPersistentLoggedIn,
      dashboardLoginPersistentValue,
      arr2021: d2021,
      arr2022: d2022,
      arrFathers: fathersData,
      title: "St.George",
      description: "صفحه كنيسه الشهيد العظيم مارجرجس ببورسعيد",
    });
  } catch (err) {
    db.logError(err);
    res.status(500).render("500-2.ejs", {
      adminName: res.locals.adminName,
      isPersistentLoggedIn:
        req.cookies["dashboard_login_persistent"] === "true",
      dashboardLoginPersistentValue: req.cookies["dashboard_login_persistent"],
      title: "500 Internal server error",
      description: "Sorry, something went wrong. Please try again later.",
    });
  }
});

module.exports = router;
