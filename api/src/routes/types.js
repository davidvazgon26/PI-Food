const { Router } = require('express');
const { get } = require('./recipes');
const routerT = Router();


routerT.get('/types', (req, res, next)=>{
    res.send('hola desde get/types')
})

routerT.post('/types', (req, res, next)=>{
    res.send('hola desde post/types')
})

routerT.put('/types', (req, res, next)=>{
    res.send('hola desde put/types')
})

routerT.delete('/types', (req, res, next)=>{
    res.send('hola desde delete/types')
})


module.exports = routerT;