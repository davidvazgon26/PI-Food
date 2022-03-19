import {Link} from 'react-router-dom'

//CSS
import s from './navbar.module.css'
import logo from '../../assets/images/cooking.png'

export default function NavBar (){
return (
  <div className={s.container}>
    <img className={s.img} src={logo} alt="imagen logo"/>
          <p className={s.parrafo}>Welcome to the recipe catalog </p>
    <nav className={s.navegacion}>
      <ul>
        <li>
          <Link className={s.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={s.link} to="/recipes">
            Recipes
          </Link>
        </li>
        <li>
          <Link className={s.link} to="/agregar">
            Add Recipes
          </Link>
        </li>
        <li>
          <Link className={s.link} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

}