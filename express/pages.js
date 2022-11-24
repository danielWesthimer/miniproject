const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<a href="pages/abaut">abaut</a>   <a href="pages/sports">sports</a>')
})
router.get('/sports',(req,res)=>{
    res.sendFile("sports.html",{root:__dirname})
})

router.get('/abaut',(req,res)=>{
    res.sendFile("abaut.html",{root:__dirname})
})

module.exports =router;