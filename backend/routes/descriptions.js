const router = require('express').Router();
let Description = require('../models/description.model');

router.route('/').get((req, res) => {
  Description.find()
    .then(descriptions => res.json(descriptions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const product = req.body.product;
  const comments = req.body.comments;
  const size = Number(req.body.size);
  const price = Number(req.body.price);
  const date = Date.parse(req.body.date);

  const newDescription = new Description({
    product,
    comments,
    size,
    price,
    date,
  });

  newDescription.save()
  .then(() => res.json('Description added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Description.findById(req.params.id)
    .then(description => res.json(description))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Description.findByIdAndDelete(req.params.id)
    .then(() => res.json('Description deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Description.findById(req.params.id)
    .then(description => {
      description.product = req.body.product;
      description.comments = req.body.comments;
      description.size = Number(req.body.size);
      description.price = Number(req.body.price);
      description.date = Date.parse(req.body.date);

      description.save()
        .then(() => res.json('Description updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;