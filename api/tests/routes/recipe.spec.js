/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: "Fb pollooteee asado para ketogenic",
  summary: "No se que poner aqui, pero hagamos como que dice algo",
  spoonacularScore: 55.8,
  healthScore: 12,
  instructions:"mata el pollo, pela el pollo, cose el pollo y listoooooo",
  image: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/02/cual-es-la-comida-mas-importante.jpg",
  api: "noAPI"
}

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.findAll());
  describe('GET /api/recipes', () => {
    it('should get 200', () =>
      agent.get('/api/recipes').expect(200)
    );
  });
  describe('POST /api/recipes', () => {
    it('should get 200', () =>
      agent.get('/api/recipes', recipe).expect(200)
    );
  });
  describe('GET /api/recipes array', () => {
    it('should get array with values', async () =>
      {let arr = await agent.get('/api/types')
      result = arr.text.length>0?true:false}
    );
  });
    
});


// describe('Recipe routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Recipe.sync({ force: true })
//     .then(() => Recipe.create(recipe)));
//   describe('GET /recipes', () => {
//     it('should get 200', () =>
//       agent.get('/recipes').expect(200)
//     );
//   });
// });
