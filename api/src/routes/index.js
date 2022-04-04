const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require ('./recipes')
const types = require ('./types')
// const demo = require ('./demo')
// const demo2 = require ('./demo2')
 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api/recipes', recipes)
router.use('/api/types', types)




// router.use('/demo', demo)
// router.use('/demo2', demo2)


module.exports = router;
