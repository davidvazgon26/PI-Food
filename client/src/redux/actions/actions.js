import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES'
export const GET_TIPOS = 'GET_TIPOS'
export const SORT_ABC = 'SORT_ABC'
export const SORT_BY_SCORE = 'SORT_BY_SCORE'
export const FILTER_PLACE = 'FILTER_PLACE'
export const DIET_FILTER = 'DIET_FILTER'
export const RECIPE_SEARCH = 'RECIPE_SEARCH'
export const RESET = 'RESET'
export const PAGINADO = 'PAGINADO'
export const DETAIL = 'DETAIL'


export function getRecipes() {
  return async function (dispatch) {
    try {
      let result = await axios.get("/api/recipes");
      dispatch({
        type: GET_RECIPES,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      let result = await axios.get("/api/types");
      dispatch({
        type: GET_TIPOS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function sortABC(orden){
  return {
      type:SORT_ABC,
      payload:orden    
  }
}

export function sortByScore(orden){
  return {
    type: SORT_BY_SCORE,
    payload:orden
  }
}

export function APIfilter(filtro){
  return{
    type: FILTER_PLACE,
    payload:filtro
  }
}

export function DietFilter(filtro){
  return{
    type: DIET_FILTER,
    payload:filtro
  }
}

export function recipeSearch(search){
  return  function(dispatch){
    axios.get('/api/recipes?title='+search)
    .then((recipes)=>{
      dispatch({
        type:RECIPE_SEARCH,
        payload: recipes.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function reset(){
  return{
    type:RESET
  }
}

export function filterPag(count, max){
  return{
    type:PAGINADO,
    payload:{
      count,
      max
  }
  }
}

export function detalle(idReceta){
  return  function(dispatch){
    axios.get('/api/recipes/'+ idReceta)
    .then((recipes)=>{
      dispatch({
        type:DETAIL,
        payload: recipes.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
}







