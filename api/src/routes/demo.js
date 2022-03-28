// const fetch = require('cross-fetch');

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

console.log(result)

// result.then(result => console.log(result))




