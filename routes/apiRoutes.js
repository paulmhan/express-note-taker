const router = require('express').Router();
const db = require("../db/db.json");
const fs = require("fs");

router.get("/notes", (req,res) => { 
    fs.readFileSync(db ,function (err, data){
        if (err){
            console.log(err);
        }
        res.json(data);
    })
})

// post route
router.post("/notes", (req,res) => {
    let newNote = req.body.data;

//use fs to save notes to db.json
    res.json()
})

// delete route
router.delete("/notes/:id", (req,res) => {
    //grab id from req.params
    let noteId = req.params.id;
    fs.unlink()
    //use fs to delete the note
    res.json()
})




module.exports = router;
