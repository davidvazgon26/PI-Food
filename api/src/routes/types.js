const { Router } = require('express');
const {Type} = require('../db');
const routerT = Router();
const {Op} = require('sequelize')

// const resp = require('../resp.json')

// console.log(resp)

routerT.get("/types", (req, res, next) => {
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

routerT.post("/types", (req, res, next) => {
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
        {diet: "Vegan",api: "API"},
        {diet: "Gluten Free",api: "API"},
        {diet: "Ketogenic",api: "API"},
        {diet: "Vegetarian",api: "API"},
        {diet: "Lacto-Vegetarian",api: "API"},
        {diet: "Ovo-Vegetarian",api: "API"},
        {diet: "Prescetarian",api: "API"},
        {diet: "Paleo",api: "API"},
        {diet: "Primal",api: "API"},
        {diet: "Low FODMAP",api: "API"},
        {diet: "Whole30",api: "API"},
      ])
      res.send('Se crearon los tipos de dieta de la API')
  } catch (error) {
    next(error);
  }
})

routerT.put("/types/:id", async (req, res, next) => {
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

routerT.delete("/types", (req, res, next) => {
  try {
      //Solo modifica elementos de la BD
  const { id } = req.query;
  Type.destroy({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
  res.send(`El elemento con id: ${id} fue eliminado`);
  } catch (error) {
    next(error);
  }
});


module.exports = routerT;