import { useDispatch} from 'react-redux'
import { sortABC } from '../../redux/actions/actions'

//CSS
import s from './orderABC.module.css'

export default function OrderABC(){
    const dispatch = useDispatch();

    function onSelectChange(event){
        document.querySelector('.orderByScore').value='Ninguno'
        dispatch(sortABC(event.target.value))
    }

    return (<div className={s.ordenContainer}>
        <label>ABC order</label>
        <select className="orderABC" id={s.select} onChange={onSelectChange}>
          <option value="Ninguno">Ninguno</option>
          <option value="ascendente">ascendente</option>
          <option value="descendente">descendente</option>
        </select>
      </div>
    );
}