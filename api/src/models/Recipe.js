const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4  //Generacion aut de id
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.TEXT,
      validate:{isUrl:true},
      defaultValue: 'https://i.pinimg.com/originals/76/c6/46/76c64646e9be7aef25124d07b20aa5e2.jpg'
    },
    // clientGame:{
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: false
      // }
      timestamps: false, 
      createdAt: false,
      
    });
};
