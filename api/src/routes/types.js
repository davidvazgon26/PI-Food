const { Router } = require('express');
const routerT = Router();
const {Type} = require('../db');
const {Op} = require('sequelize')
require('dotenv').config();
const { APIKey } = process.env;
const fetch = require("node-fetch")

// const resp = require('../resp.json')

// console.log(resp)

routerT.get("/", (req, res, next) => {
  try {
    const result = Type.findAll();
    result.then((response) => {
      let arr = response.map((item) => item.dataValues);
      res.send(arr);
    });
  } catch (error) {
    next(error);
  }
});

// Traer en automatico dietas de la API
routerT.get('/diets', (req,res,next)=>{
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&addRecipeInformation=true&offset=600&number=100`)
  .then(response => response.json())
  .then(result => {
    let arr = []
    let arr2 =[]
    arr = result.results.map(item => item.diets)
    arr.flat().forEach((item) =>{
      
      if (!arr2.includes(item)) {
          arr2.push(item)
          Type.create({ 
            diet: item, api: "API",
          })
      }      
    })
    console.log(arr2)
    res.send(arr2)
  })
})

routerT.post("/", (req, res, next) => {
  try {
    const { diet, api } = req.body;
    Type.create({
      diet,
      api: api,
    });
    res.send("Se agrego nuevo tipo de dieta");
  } catch (error) {
    next(error);
  }
});

routerT.post('/crearlista', async (req, res, next)=>{  //Solo usar para crear la lista de tipo de recetas la primera vez
  try {
      const lista = await Type.bulkCreate([
        {diet: "vegan",api: "API", image:"https://spoonacular.com/application/frontend/images/badges/vegan.svg"},
        {diet: "gluten Free",api: "API", image:"https://spoonacular.com/application/frontend/images/badges/gluten-free.svg"},
        {diet: "ketogenic",api: "API", image:""},
        {diet: "vegetarian",api: "API", image:"https://spoonacular.com/application/frontend/images/badges/vegetarian.svg"},
        {diet: "lacto-Vegetarian",api: "API", image:"https://spoonacular.com/application/frontend/images/badges/vegetarian.svg"},
        {diet: "ovo-Vegetarian",api: "API", image:"https://spoonacular.com/application/frontend/images/badges/vegetarian.svg"},
        {diet: "prescetarian",api: "API", image:"https://spoonacular.com/application/frontend/images/badges/pescetarian.svg"},
        {diet: "paleo",api: "API", image:"https://spoonacular.com/application/frontend/images/badges/paleo.svg"},
        {diet: "primal",api: "API", image:"https://spoonacular.com/application/frontend/images/badges/primal.svg"},
        {diet: "low FODMAP",api: "API"},
        {diet: "whole30",api: "API"},
      ])
      res.send('Se crearon los tipos de dieta de la API')
  } catch (error) {
    next(error);
  }
})

routerT.put("/:id", async (req, res, next) => {
  //Solo modifica elementos de la BD
  try {
    const { id } = req.params;
    const { diet, api } = req.body;
    if (diet) {
      await Type.update(
        { diet: diet, api: api },
        {
          where: {
            id: {
              [Op.eq]: id,
            },
          },
        }
      );
      res.send("elemento actualizado");
    }
  } catch (error) {
    next(error);
  }
});

routerT.delete("/", async (req, res, next) => {
  try {
      //Solo modifica elementos de la BD
  const { id } = req.query;
  let verifica = await Type.findOne({
    where: { id: id }
  })

  if (verifica) {
    await Type.destroy({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
  }else{ 
    res.status(404).send('Element Not found')
  }
  
  res.send(`El elemento con id: ${id} fue eliminado`);
  } catch (error) {
    next(error);
  }
});


module.exports = routerT;