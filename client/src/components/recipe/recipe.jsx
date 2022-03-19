import {Link} from 'react-router-dom'
//imagen
import img from '../../assets/images/platilloGenerico.png'
//CSS
import s from './recipe.module.css'

export default function Recipe({id, title, image}){

    return (
      <div>
        <p>Id: {typeof id === 'string'?id.substring(0,8):id}</p>
        <img src={image.includes("http") ? image : img} />
        <h2>Recipe: {title}</h2>

        <Link to={`/recipes/${id}`}>Ir a Detalle</Link>
      </div>
    );

}