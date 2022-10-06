const {Router} = require("express");
const Shirt = require("../models/Shirt");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newShirt = new Shirt(request.body);
  newShirt.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
