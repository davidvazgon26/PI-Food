import { useDispatch } from "react-redux"
import {sortByScore}  from '../../redux/actions/actions'

//CSS
import s from "./orderByScore.module.css"

export default function OrderByScore(){
    const dispatch = useDispatch()

    function onSelectChange(event){
        document.querySelector('.orderABC').value='Ninguno'
        dispatch(sortByScore(event.target.value))
    }

    return (<div className={s.orderContainer}>
        <label>Order by Score</label>
        <select className="orderByScore" id={s.select} onChange={onSelectChange}>
          <option value="Ninguno">Ninguno</option>
          <option value="ascendente">ascendente</option>
          <option value="descendente">descendente</option>
        </select>
      </div>
    );
}