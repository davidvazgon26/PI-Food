import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getRecipes } from '../../redux/actions/actions';


//Componentes
import Recipe from '../recipe/recipe.jsx'
import Loading from '../loading/loading.jsx'
//css
import s from './recipes.module.css'


export default function Recipes(){
    let recipes = useSelector((state)=> state.recipesShow);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRecipes());
        
    },[dispatch])

    return (
      <div className={s.contenedorCards}>
          {recipes.length > 0 ? (
            recipes.map((recipe) => {
              return (
                <Recipe key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image}
                  types={recipe.types} />
              );
            })
          ) : ( <div className={s.loading}> <Loading /></div> )
          }
        </div>
    );
    
}