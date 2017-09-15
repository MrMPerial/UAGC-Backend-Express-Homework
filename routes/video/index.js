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

router.post('/', (req, res) => {
  let videoId = req.body.id;
  video.push(req.body);
  let videoInfo = getVideo(video, videoId);
  res.status(200).json(video);
});

router.put('/:id', (req, res) => {
  let videoInfo = updateVideo(video, req.body, req.params.id);
  res.status(200).json(video);
});

function getVideo(arr, id) {
  let piece;

  for (let i = 0; i < arr.length; i++) {
    if ( id.toString() === arr[i].id.toString() ) {
      piece = arr[i];
    }
  }

  return piece;
}

function updateVideo(arr, info, id) {
  let piece;

  for (let i = 0; i < arr.length; i++) {
    if ( id.toString() === arr[i].id.toString() ) {
      arr[i].title = info.title;

      piece = arr[i];
    }
  }

  return piece;
}

module.exports = router;
