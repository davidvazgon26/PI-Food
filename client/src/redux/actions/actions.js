import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES'


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
