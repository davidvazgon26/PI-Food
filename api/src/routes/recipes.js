const { Router } = require('express');
const routerR = Router();

routerR.get('/recipes',(req, res,next) => {
    res.send('Hola desde get/recipies')
})

routerR.get('/recipes/:idReceta',(req, res,next) => {
    res.send('Hola desde get/recipies')
})

routerR.post('/recipes',(req, res,next) => {
    res.send('Hola desde post/recipies')
})

routerR.put('/recipes',(req, res,next) => {
    res.send('Hola desde put/recipies')
})

routerR.delete('/recipes',(req, res,next) => {
    res.send('Hola desde delete/recipies')
})
module.exports = routerR;