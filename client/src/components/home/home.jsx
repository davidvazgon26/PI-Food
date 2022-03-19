import { Link } from "react-router-dom";

//CSS
import s from './home.module.css'

export default function Home(){
    return(
        <div className={s.body}>
        <p>
          <Link className={s.btn} to="/recipes">Ingresar</Link>
        </p>
      </div>
    )

}