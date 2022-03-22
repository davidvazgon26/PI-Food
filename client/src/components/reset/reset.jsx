import {useDispatch} from 'react-redux';
import {reset} from '../../redux/actions/actions'


//CSS
import s from './reset.module.css'

export default function Reset(){
    const dispatch = useDispatch()

    function reinicio(){
        document.querySelector('.orderABC').value="Ninguno"
        document.querySelector('.orderByScore').value="Ninguno"
        document.querySelector('.DietFilter').value="Todos"
        document.querySelector('.FiltroAPI').value="Todos"
        dispatch(reset())
    }

    return(<div>

            <button className={s.btn} onClick={reinicio}>Reset</button>
        </div>
    )
}