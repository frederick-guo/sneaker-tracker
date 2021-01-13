const router = require('express').Router();
let Description = require('../models/description.model');

router.route('/').get((req, res) => {
  Descro[topm].find()
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
    prize,
    date,
  });

  newDescription.save()
  .then(() => res.json('Description added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

/*
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
*/

module.exports = router;