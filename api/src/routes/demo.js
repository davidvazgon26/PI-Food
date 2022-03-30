// const fetch = require('cross-fetch');
const { Router } = require('express');
const routerD = Router();
require('dotenv').config();
const { APIKey } = process.env;
const fetch = require("node-fetch")
const axios = require('axios')

// fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=2b59c90e2454447cb987a07f0d325152&offset=0&number=10")
// .then(response => response.json())
// .then(data => console.log(data))

const datos = require('../respuesta.json')
// es solo una demo para usar con el json


 const result = new Promise((resolve, reject) => {
    resolve( simular())
 })
function simular(){
    return datos
}

// result.then(resolve=>{console.log(resolve)})

// result.then(result => console.log(result))


//Ejemplos de rutas:

routerD.get('/',(req, res, next)=>{

    res.send('Hola desde Demo')
})


routerD.get('/asyncfetch', async (req, res, next)=>{
   const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&addRecipeInformation=true&offset=0&number=10`)
   const data = await response.json()
   res.send(data.results)
})

routerD.get('/asyncaxios', async (req, res, next)=>{
   const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&addRecipeInformation=true&offset=0&number=10`)
   res.send(response.data.results)
})

routerD.get('/promesafetch',  (req, res, next)=>{
   fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&addRecipeInformation=true&offset=0&number=10`)
   .then(response => response.json())
   .then(result =>{res.send(result.results)})
})

routerD.get('/promesaaxios', (req, res, next)=>{
   axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&addRecipeInformation=true&offset=0&number=10`)
   .then(response =>{res.send(response.data.results)})
})

routerD.get('/porquery', (req, res, next)=>{
   //http://localhost:3001/demo/promesaaxios?name=david
   res.send(req.query)
})

routerD.get('/porparams/:name', (req, res, next)=>{
   //http://localhost:3001/demo/porparams/otro david
   res.send(req.params)
})

routerD.get('/porbody', (req, res, next)=>{
   //http://localhost:3001/demo/porbody
   res.send(req.body)
})



module.exports = routerD;




