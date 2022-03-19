import {Link} from "react-router-dom"
import s from './noMatch.module.css'

export default function NoMatch(){
    return(
        <div className={s.fondo}>

            <p>Ruta no encontrada, regresa a: <br/><Link className={s.link} to="/recipes">Inicio</Link></p>
        </div>
    )
}