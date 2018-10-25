const router = require("express").Router();
const clothesController = require("../../controllers/clothesController");

// Matches with "/api/books"
router.route("/")
  .get(clothesController.findAll)
  .post(clothesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(clothesController.findById)
  .put(clothesController.update)
  .delete(clothesController.remove);

module.exports = router;
