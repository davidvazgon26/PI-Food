import {Link} from 'react-router-dom'
//imagen
import img from '../../assets/images/platilloGenerico.png'
//CSS
import s from './recipe.module.css'

export default function Recipe({id, title, image, types}){
      // console.log(types)
    return (
      <div className={s.cardContainer}>
        <h2 className={s.titRecipe}>{title}</h2>
       <div className={s.subcontainer}>
       <img className={s.cardImage} src={image.includes("http") ? image : img} alt="imagen comida" />
          <div className={s.diet}>
            {types.length <= 0 ? <p className={s.p}>Tipo de dieta pendiente</p> : types.map((item,index)=>{
              let result =  typeof item === "object"? <p className={s.p} key={index}>{item.diet}</p> : <p className={s.p} key={index}>{item}</p>
              return result
            })}
          </div>
       </div>

        
        <Link className={s.link} to={`/recipes/${id}`}>Ir a Detalle</Link>
        <p className={s.id}>Id: {typeof id === "string" ? id.substring(0, 8) : id}</p>
      </div>
    );

}