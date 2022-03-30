const { Router } = require('express');
const routerD2 = Router();

const datos = require("../respuesta.json");

const result = new Promise((resolve, reject) => {
  resolve(simular());
});

function simular() {
  return datos;
}


routerD2.get('/demofinal', (req,res,next)=>{

// console.log(result)

result.then(resolve=>{
    // console.log(resolve.results)
    let arr =[]

    arr = resolve.results.map(item =>{
        obj = {
            id: item.id,
            title: item.title,
            summary: item.summary,
            spoonacularScore: item.spoonacularScore,
            healthScore: item.healthScore,
            types: item.diets.map(each =>each),
            instructions: item.analyzedInstructions[0]?.steps.map(each =>{return each.step}),
            image: item.image,
            api: "API",
         }
         return obj
    })
    
    res.send(arr)
    })
})

module.exports = routerD2;




