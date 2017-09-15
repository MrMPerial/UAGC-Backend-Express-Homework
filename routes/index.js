const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('So far, so good!');
});

router.use('/audio', audio);
router.use('/video', audio);
router.use('/example', audio);

module.exports = router;
