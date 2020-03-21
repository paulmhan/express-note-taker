const router = require('express').Router();
const db = "routes/../db/db.json";
const fs = require("fs");

//get route
router.get("/notes", (req, res) => {
    fs.readFile(db, "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        let dbData = JSON.parse(data);
        res.json(dbData);
    })
})

// post route
router.post("/notes", (req, res) => {
    console.log(req.body);
    let newNote = req.body;
    fs.readFile(db, "utf8",function (err, data) {
        if (err) {
            console.log(err);
        } 
        let json = JSON.parse(data);
        newNote.id = json.length + 1;
        json.push(newNote);
        fs.writeFile(db, JSON.stringify(json), function (err){
            if(err){
                console.log(err);
            }
            res.json({success:true});
        })
    })
})

// delete route
router.delete("/notes/:id", (req, res) => {
    //grab id from req.params
    let noteId = req.params.id;
    fs.unlink()
    //use fs to delete the note
    res.json()
})




module.exports = router;
