const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Prodcut.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const categoryName = req.body.categoryName;
  const productName = req.body.productName;
  const description = req.body.description;
  const price = Number(req.body.price);
  const paidFor = req.body.paidFor;
  const date = Date.parse(req.body.date);

  const newProduct = new Product({
    categoryName,
    productName,
    description,
    price,
    paidFor,
    date,
  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.categoryName = req.body.categoryName;
      product.productName = req.body.productName;
      product.description = req.body.description;
      product.price = Number(req.body.price);
      product.paidFor = req.body.paidFor;
      product.date = Date.parse(req.body.date);

      product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;