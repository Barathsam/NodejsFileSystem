var express = require('express');
const app = express();
var upload = require('express-fileupload');
app.use(upload());

app.get("/", (req, res) => {
    res.status(200).send("Current Timestamp File");
});


app.post("/upload", (req, res) => {
    const file = req.files.file;
    var filename = file.name
    console.log(filename)
    file.mv('./uploads/'+filename, function(err){
        if(err)
            throw err;
        res.send({
                success: true,
                message:"File uploaded!"
    });
    
    });
})

app.listen(3001, () => {
    console.log("Started on port:3001");
});