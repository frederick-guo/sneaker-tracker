const router = require('express').Router();
let Category = require('../models/category.model');

router.route('/').get((req, res) => {
  Category.find()
    .then(listOfCategories => res.json(listOfCategories))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const categoryName = req.body.categoryName;

  const newCategory = new Category({categoryName});

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;