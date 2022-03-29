import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import { useParams } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {detalle} from '../../redux/actions/actions'
import {clean} from '../../redux/actions/actions'

import Loading from '../loading/loading.jsx'
import s from './recipeDetail.module.css'

export default function Detail(){
    const recipes = useSelector(state => state.detalle)
    let {idReceta} = useParams()
    let dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(detalle(idReceta));
        return () =>{
          dispatch(clean())
        }
    },[idReceta, dispatch])

    // let texto = recipes.summary.replace(/&(lt|gt);/g,)
    // let summary = recipes.summary.replace(/<\/?[^>]+(>|$)/g, "")

    return (
      <div className={s.container}>
        {recipes ? (
          <div className={s.card}>
            <div className={s.id}>
              <p className={s.db}>
              {console.log(recipes.api)}
                {recipes.api === "noAPI" ? "DB" : recipes.api}
              </p>
              <p className={s.pp}>Id: {recipes.id}</p>
            </div>
            <h2>{recipes.title}</h2>
            <div className={s.media}>
              <img src={recipes.image} alt="imagen" />
              <div className={s.divMedia}>
                <p>Healt Score: {recipes.healthScore}</p>
                <p>Score: {recipes.spoonacularScore}</p>
                <div className={s.tipos}>
                <p>Diets:</p>
                  {recipes.types?.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
            <p className={s.summary}>
              Summary: <br />
              {recipes.summary?.replaceAll(/<\/?[^>]+(>|$)/g, "")} 
            </p>
            <p className={s.instructions}>
              Instructions: <br />
              {recipes.instructions}
            </p>
          </div>
        ) : (
          <Loading />
        )}
        <div>
          <Link className={s.link} to="/recipes">
            <strong>Regresar</strong>
          </Link>
        </div>
      </div>
    );
}