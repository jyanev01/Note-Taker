const router = require('express').Router();

const notes =[];

// get the all the notes from the notes array created above
router.get('/notes', (req, res) =>{
    res.json(notes);
});

// get specific note
router.get('/notes/:id', (req, res) =>{
    
    const params = [req.params.id];

    res.json(notes);
});


// Post new note to the api
router.post('/index', (req,res) => {
    // something to const- of how to identify the ID
    notes.push(req.body);

    res.json(notes);
});






// Delete a note
router.delete('/api/index/:id', (req, res) => {
    // something to select the ID and the shoose this a
    res.send('Item Deleted');
    res.json(notes);
})






module.exports = router;