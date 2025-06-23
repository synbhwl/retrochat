const express = require('express'); //importing express basically
const cors = require('cors'); //importing cors
const PORT = 3000;

const app = express(); //making an app instance 

app.use(cors()); //enables cors basically
app.use(express.json()); //enables json parsing basically

app.post('/chat', (req, res)=>{ //route 
    const userMessage= req.body.msg; //taking the data we got from the frontend
    console.log('recieved', userMessage);

    res.json({reply:`you said ${userMessage}`}); //sending a reply

});


app.listen(PORT, ()=>{ //starting the server 
    console.log('server is listening');
});