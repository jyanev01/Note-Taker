const router = require('express').Router();
const notePadApi = require('../../db/db.json');
const fs = require("fs")

// get the all the notes from the db.json file provided
router.get('/notes', (req, res) =>{
    let results = notePadApi;
    res.json(results);
});

// get specific note fromt he notes array
router.delete('/notes/:id', (req, res) =>{
    const idToDelete = req.params.id;

    notePadApi.forEach((obj, index) => {
        if(obj.id == idToDelete){
            notePadApi.splice(index, 1)
        }
    })

    fs.writeFileSync("./db/db.json", JSON.stringify(notePadApi));

    res.json(notePadApi);
});


// Post new note to the api
router.post('/notes', (req,res) => {
    // something to const- of how to identify the ID
    let results = 
    notes.push(req.body);

    res.json(results);
});






// Delete a note
// router.delete('/api/index/:id', (req, res) => {
//     // something to select the ID and the shoose this a
//     res.send('Item Deleted');
//     res.json(notes);
// })






module.exports = router;