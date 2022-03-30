const { Recipe, Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    // beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ title: 'Milanesa a la napolitana' });
      });
    });
  });
  describe('Validators', () => {
    // beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if diet is null', (done) => {
        Type.create({})
          .then(() => done(new Error('It requires a valid diet')))
          .catch(() => done());
      });
      it('should work when its a valid diet', () => {
        Type.create({ diet: 'Carnivoro' });
      });
    });
  });
});




// describe('Recipe model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Recipe.sync({ force: true }));
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Recipe.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Recipe.create({ name: 'Milanesa a la napolitana' });
//       });
//     });
//   });
// });
