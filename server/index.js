const express = require('express');
require('dotenv').config();
const cors = require('cors');
const port = 5000
const app = express();
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/sendscript', async(req,res)=>{
    const {title, plot, genre} = req.body;
   const options = {
    method: "POST",
    headers:{
        'Authorization': `Bearer ${process.env.API_KEY}`, 
        'Content-Type': 'application/json'         
    },
    body: JSON.stringify({
        model : "gpt-3.5-turbo",
        messages: [{ role: "user", content: `write a script title is ${title} plot is ${plot} and genre is ${genre}` }],
        max_tokens:50,
    })
}
    try {       
        const response = await fetch("https://api.openai.com/v1/chat/completions", options)
        const jsonData = await response.json();
        console.log(jsonData)
        res.send(jsonData)
    } catch (error) {
        console.error(error);
    }
})

app.listen(port, ()=>{console.log( `app is running on port ${port}`)})
