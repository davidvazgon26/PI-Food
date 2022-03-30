import {GET_RECIPES, GET_TIPOS, SORT_ABC, SORT_BY_SCORE, FILTER_PLACE, DIET_FILTER, RECIPE_SEARCH, RESET, PAGINADO, DETAIL} from '../actions/actions.js'

const initialState ={
    recipes: [],
    filtroRecipes: [],
    types:[],
    recipesShow:[],
    message:[],
    detalle:{}
}

export default function recipeReducer(state=initialState, action){
    switch (action.type) {
        case GET_RECIPES:
           return{
               ...state,
               recipes:action.payload,
               filtroRecipes:action.payload,
           }
        case GET_TIPOS:
           return{
               ...state,
               types:action.payload,
           }
        case SORT_ABC:
            let sortRecipes = [...state.filtroRecipes]

            sortRecipes = sortRecipes.sort((a,b)=>{
                if(a.title < b.title){
                    return action.payload === "ascendente"? -1 : 1;
                }
                if (a.title > b.title) {
                    return action.payload === "ascendente"? 1 : -1;
                }
                return 0
            })

            return {
                ...state,
            filtroRecipes: action.payload === 'Ninguno'? state.filtroRecipes : sortRecipes
            }
        case SORT_BY_SCORE:
            let sortRecipesByScore = [...state.filtroRecipes]
            sortRecipesByScore = sortRecipesByScore.sort((a,b)=>{
                if(a.healthScore < b.healthScore){
                    return action.payload === "ascendente"? -1 : 1;
                }
                if (a.healthScore > b.healthScore) {
                    return action.payload === "ascendente"? 1 : -1;
                }
                return 0
            })

            return {
                ...state,
            filtroRecipes: action.payload === 'Ninguno'? state.filtroRecipes : sortRecipesByScore
            }
        case FILTER_PLACE:
            let valor = action.payload
            const newFilter = state.recipes.filter((item)=>{
               let resultado = item.api === valor?true:false
                return resultado
           })
            return {
                ...state,
            filtroRecipes : valor === "Todos"?state.recipes:newFilter
            }
        case DIET_FILTER:
          
            let valorFilter = action.payload
            const dietFilter = state.recipes.filter((item)=>{
               
                let arr = [];

                if (item.api !== "API"&& item.types.length > 0) {
                    arr = item.types.map(el =>{
                        return el.diet
                    })
                }
                console.log(arr)
                let result = item.api ==="API"?item.types.includes(valorFilter):item.types.length>0?arr.includes(valorFilter):false
                return result
            })
            return {
                ...state,
                message : valorFilter === "Todos"?"":dietFilter.length===0?alert('Sin datos que mostrar'):'',
            filtroRecipes : valorFilter === "Todos"?state.recipes:dietFilter.length===0?state.filtroRecipes:dietFilter,
            }
        case RECIPE_SEARCH:
            // let arr =[]
            return{
                ...state,
                message: action.payload.length<=0?alert('No se encontro la receta solicitada'):'',
                filtroRecipes: action.payload.length>0?action.payload:state.filtroRecipes
            }
        case PAGINADO:
            let count = action.payload.count
            let max = action.payload.max
            const result = state.filtroRecipes.slice(count, max)
                return {
                    ...state,
                    recipesShow: result
                }
        case RESET:
            return{
                ...state,
                filtroRecipes: state.recipes
            }
        case DETAIL:
            return {
                ...state,
                detalle: action.payload
            }
        
        default:
            return state;
    }
}