import {useDispatch} from 'react-redux';
import {APIfilter} from '../../redux/actions/actions'

//CSS
import s from './filtroApiNoApi.module.css'

export default function FiltroAPINoAPI(){
    const dispatch = useDispatch();

    function onSelectChange(event){
        dispatch(APIfilter(event.target.value))
    }

    return(<div className={s.filterContainer}>
            <label>API-BD Filter</label>
            <select className='FiltroAPI' id={s.select} onChange={onSelectChange}>
                <option value="Todos">Todos</option>
                <option value="API">API</option>
                <option value="noAPI">DB</option>
            </select>
        </div>
    )
}