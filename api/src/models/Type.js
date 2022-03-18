const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4  //Generacion aut de id
      },
    diet: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    api:{
      type: DataTypes.STRING,
      defaultValue: "noAPI"
    }
  },{timestamps: false});
};
