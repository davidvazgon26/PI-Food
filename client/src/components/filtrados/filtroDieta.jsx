import {useDispatch, useSelector} from 'react-redux';
import {getTypes,DietFilter} from '../../redux/actions/actions';
import {useEffect} from 'react'

//CSS
import s from './filtroDieta.module.css'


export default function FiltrarDieta(){
    const tipos = useSelector(state => state.types)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])
    
    function onSelectChange(event){
        dispatch(DietFilter(event.target.value))
    }

    return (<div className={s.ordenContainer}>
        <label>Diet Filter</label>
        <select className="DietFilter" id={s.select} onChange={onSelectChange}>
          <option value="Todos">Todos</option>
          { tipos.map(tipo =>{
              return(<option key={tipo.id} id={tipo.id} value={tipo.diet}>{tipo.diet}</option>)
          })

          }
        </select>
      </div>
    );
}