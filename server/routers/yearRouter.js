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

// Route handler for different years
const yearRoutes = [
  { year: 2018, title: "2018 Data", description: "all data about year 2018" },
  { year: 2019, title: "2019 Data", description: "all data about year 2019" },
  { year: 2020, title: "2020 Data", description: "all data about year 2020" },
  { year: 2021, title: "2021 Data", description: "all data about year 2021" },
  { year: 2022, title: "2022 Data", description: "all data about year 2022" },
  { year: 2023, title: "2023 Data", description: "all data about year 2023" },
  {
    year: "Fathers",
    title: "Fathers Data",
    description: "all data about Fathers Data",
  },
  { year: "Top", title: "Tops Data", description: "all data about Tops Data" },
];

yearRoutes.forEach((route) => {
  router.get(`/arr${route.year}`, async (req, res) => {
    const isPersistentLoggedIn =
      req.cookies["dashboard_login_persistent"] === "true";
    const isSessionLoggedIn = req.session.dashboard_login_session === true;

    // Determine the value of the "dashboard_login_persistent" cookie
    const dashboardLoginPersistentValue =
      req.cookies["dashboard_login_persistent"];

    db.readData(route.year)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        db.logError(err);
        res
          .status(500)
          .json({ error: "Sorry something happened in the server" });
      });
  });
});

module.exports = router;
