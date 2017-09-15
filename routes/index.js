const router = require('express').Router();

const audio = require('./audio');
const video = require('./video');
//const example = require('./example');

router.get('/', (req, res) => {
  res.status(200).send('So far, so good!');
});

router.use('/audio', audio);
router.use('/video', video);
//router.use('/example', example);

module.exports = router;
