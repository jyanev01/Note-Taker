const path = require('path');
const router = require('router').Router();

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
});

// why do I need this below- * was to notate final- maybe I do not need it
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

module.exports = router;
