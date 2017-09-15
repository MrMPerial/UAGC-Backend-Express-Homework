const router = require('express').Router();

const video = [
  {
    id: 1,
    title: "Man on Fire"
  },
  {
    id: 2,
    title: "Office Space"
  }
];

router.get('/', (req, res) => {
  res.status(200).json(video);
});

router.get('/:id', (req, res) => {
  let piece;

  for (let i = 0; i < video.length; i++) {
    if ( req.params.id.toString() === video[i].id.toString() ) {
      piece = video[i];
    }
  }
  res.status(200).json(piece);
});

module.exports = router;
