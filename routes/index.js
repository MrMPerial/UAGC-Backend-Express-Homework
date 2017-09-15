const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('So far, so good!');
});

module.exports = router;
