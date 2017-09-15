const router = require('express').Router();

const audio = [
  {
    id: 1,
    artist: "Tupac",
    albums: [
      {
        title: "All Eyes On Me",
        year: 1996
      },
      {
        title: "Makaveli",
        year: 1996
      }
    ]
  },
  {
    id: 2,
    artist: "Biggie",
    albums: [
      {
        title: "Ready To Die",
        year: 1994
      },
      {
        title: "Life after Death",
        year: 1997
      }
    ]
  }
];

router.get('/', (req, res) => {
  res.status(200).json(audio);
});

router.get('/:id', (req, res) => {
  let piece;

  for (let i = 0; i < audio.length; i++) {
    if ( req.params.id.toString() === audio[i].id.toString() ) {
      piece = audio[i];
    }
  }

  res.status(200).json(piece);
});

module.exports = router;
