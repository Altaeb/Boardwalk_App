const router = require("express").Router();
const debtController = require("../../controllers/debtController");

// Matches with "/api/debts"
 router.route("/")
  .get(debtController.findAll)
  .post(debtController.create); 

// Matches with "/api/debts/:id"
 router
  .route("/:id")
  .get(debtController.findById)
//   .put(debtController.update)

module.exports = router;