const router = require('express').Router();
const db = "routes/../db/db.json";
const fs = require("fs");

//get route
//when url hits /notes, get the data from the db.json file and send it back
router.get("/notes", (req, res) => {
    fs.readFile(db, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        //JSON always returns string, so parse it to make it an object
        let dbData = JSON.parse(data);
        //send data back 
        res.json(dbData);
    })
})

// post route
router.post("/notes", (req, res) => {
    //req.body only when posting, undefined until we use body parser
    let newNote = req.body;
    fs.readFile(db, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        let json = JSON.parse(data);
        newNote.id = json.length + 1;
        json.push(newNote);
        fs.writeFile(db, JSON.stringify(json), err => {
            if (err) {
                console.log(err);
            }
            res.json({ success: true });
        })
    })
})

// delete route
router.delete("/notes/:id", (req, res) => {
    //grab id from req.params
    let noteId = req.params.id;
    fs.readFile(db, "utf8", (err, data) => {
        if (err) {
            console.log(err)
        }
        const currentNotes = JSON.parse(data);
        const newNotes = currentNotes.filter(note => note.id != noteId);
        fs.writeFile(db, JSON.stringify(newNotes), err => {
            if (err) {
                console.log(err);
            }
            res.json();
        })
    })
})





module.exports = router;


//Musa:
//req.body
//line34
//sending whatever in res.json();