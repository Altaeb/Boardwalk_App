const router = require("express").Router();
const userRoutes = require("./users");
const debtRoutes = require("./debts");
const protectedRoutes = require("./protected");

// Protected routes
router.use("/protected", protectedRoutes);

// User routes
router.use("/users", userRoutes);

// Debt routes
router.use("/debts", debtRoutes);

module.exports = router;