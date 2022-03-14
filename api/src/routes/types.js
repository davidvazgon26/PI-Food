const { Router } = require('express');
const {Type} = require('../db');
const routerT = Router();
const {Op} = require('sequelize')


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
    const { diet } = req.body;
    Type.create({
      diet,
      dataDB: true,
    });
    res.send("Se agrego nuevo tipo de dieta");
  } catch (error) {
    next(error);
  }
});

routerT.put("/types/:id", async (req, res, next) => {
  //Solo modifica elementos de la BD
  try {
    const { id } = req.params;
    const { diet, api } = req.body;
    if (diet) {
      await Type.update(
        { diet: diet },
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
  //Solo modifica elementos de la BD
  const { id } = req.query;
  Type.destroy({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
  res.send(`El elemento con id: ${id} fue elilminado`);
});


module.exports = routerT;