const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require ('./recipes')
const types = require ('./types')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api/recipes', recipes)
router.use('/api/types', types)


module.exports = router;
