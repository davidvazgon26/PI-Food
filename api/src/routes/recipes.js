const { Router } = require('express');
const routerR = Router();
require('dotenv').config();
const { APIKey } = process.env;
const {Recipe} = require('../db');
const {Type} = require('../db');
const fetch = require("node-fetch")
const axios = require('axios')
const {Op} = require('sequelize')
// const ctrl = require('./controller')

const acomodarDatos = (item) =>{
    obj = {
        id: item.id,
        title: item.title,
        summary: item.summary,
        spoonacularScore: item.spoonacularScore,
        healthScore: item.healthScore,
        instructions: item.analyzedInstructions[0]?.steps.map(each =>{return each.step}),
        image: item.image,
        api: item.api?item.api:"API",
        types: item.diets.map(each =>each),
     }
     return obj
}

const acomodarDatosDB = (item) =>{
    obj = {
        id: item.id,
        title: item.title,
        summary: item.summary,
        spoonacularScore: item.spoonacularScore,
        healthScore: item.healthScore,
        instructions: item.instructions, //.replace(/\n,','/g,'.').split(',')
        image: item.image,
        api: item.api,
        types: item.types?.map(each =>each.dataValues.diet),
     }
     return obj
}

const respuesta = require('../respuesta.json')
// es solo una demo para usar con el json
routerR.get('/demo',(req,res,next)=>{
    let arr =[]
    // console.log(respuesta)
    arr = respuesta.results.map(item =>{
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

//GET sin parametro para todos y con query para el buscador /api/recipes  o ?title=title
routerR.get('/',(req, res,next) => {
    try {

        let resultAPI;
        let resultDB;
        let {title} = req.query;

        if (title) {
            resultAPI = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&addRecipeInformation=true&offset=0&number=100&query=${title}`)

            resultDB = Recipe.findAll({
                include: Type,
                where: {
                    title : {
                        [Op.iLike]: "%"+ title +"%" 
                    }
                }        
            })
        } else {
            resultAPI = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&addRecipeInformation=true&offset=0&number=60`)
     
            resultDB = Recipe.findAll({include:Type})
        }

        Promise.all([resultDB,resultAPI])
        .then(result => {
            const [resultDB,resultAPI] = result;
            resultAPI.json().then(data => {
                let API = []
                data.results?API = data.results.map(item => acomodarDatos(item)):API=[]
                let DB =[]
                resultDB?DB = resultDB.map(item => item.dataValues):DB=[]
                let Allresponse = DB.concat(API)
                res.send(Allresponse)
            });
        })
    } catch (error) {
        next(error);
    }
})

// GET por params /api/recipes:idReceta para el detalle
routerR.get('/:idReceta', async (req, res,next) => {
    try {
        let {idReceta} = req.params
        let result
        // console.log(idReceta)
        if (idReceta.length>9) {
            let respuesta = await Recipe.findAll({
                include: Type,
                where: {
                    id : idReceta
                } 
            })
            // console.log(respuesta[0].dataValues)
            result = acomodarDatosDB(respuesta[0].dataValues)

        } else {
            let respuesta  = await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${APIKey}`)
            result = acomodarDatos(respuesta.data)
        }

        res.send(result)
    } catch (error) {
        next(error);
    }
})

// POST por body /api/recipes, body
routerR.post('/', async (req, res,next) => {
    try {
        let resultado  = acomodarDatosDB(req.body)
        let result = await Recipe.create(resultado)
        res.status(201).json({'Se creo correctamente la nueva receta': result})
    } catch (error) {
        next(error);
    }
})

//POST por params para tabla de relaciones
routerR.post('/:recipeId/type/:typeId', async (req, res, next)=>{
    try {
        const {recipeId, typeId} = req.params;
        const recipe = await Recipe.findByPk(recipeId)
        await recipe.addTypes(typeId)
        res.status(200).send('se creo la relacion')
    } catch (error) {
        next(error);
    }
})

// PUT por query y body  /api/recipes?idReceta= id a modificar
routerR.put('/', async (req, res,next) => {
  try {
    let {idReceta} = req.query
    for (const key in obj = req.body) {
        let prop = {}
        prop[key] = obj[key]
        await Recipe.update(prop,
        {
            where: {
              id: {
                [Op.eq]: idReceta,
              },
            },
          }
        )
    }
    res.send('Se actualizo el registro')
  } catch (error) {
      next(error);
  }
})

//DELETE por params /api/recipes/:id
routerR.delete('/:id',(req, res,next) => {
   try {
    let {id} = req.params
    Recipe.destroy({
        where: {id:id}
    }).then(result => res.send('Se elimino el id: '+ id))
   } catch (error) {
       next(error);
   }    
})
module.exports = routerR;