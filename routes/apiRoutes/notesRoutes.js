const router = require('express').Router();

const notes =[];

// get the notes from the notes array created above
router.get('/notes', (req, res) =>{
    res.json(notes);
});

router.get('/notes/:id', (req, res) =>{
    res.json(notes);
});

router.post('/index', (req,res) => {

});

module.exports = router;