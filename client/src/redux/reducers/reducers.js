import {GET_RECIPES} from '../actions/actions.js'

const initialState ={
    recipes: [],
    filtroRecipes: [],
    types:[],
    message:[]
}

export default function recipeReducer(state=initialState, action){
    switch (action.type) {
        case GET_RECIPES:
           return{
               ...state,
               recipes:action.payload,
               filtroRecipes:action.payload,
           }
    
        default:
            return state;
    }
}