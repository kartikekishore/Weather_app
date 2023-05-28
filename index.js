
const express=require("express");
const bodyparser=require("body-parser");
const axios = require('axios');
const PORT=3000;

app=express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{  
    
    // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={b862f25e592d18228944b5f049c65d99}
    res.sendFile(__dirname+'/index.html');
})

app.post("/",async(req,res)=>{

    let city=req.body.city;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b862f25e592d18228944b5f049c65d99`;

    const response = await axios.get(url);
    console.log(response);
     
      
 
    

    res.send(`<h1>Temperature in ${city} is `+response.data.main.temp +  "<br>Feels Like "  + response.data.main.feels_like +"<h1>");
})

app.listen(PORT ,()=>{
    console.log(`listening on port ${PORT} `);
});