import {useSelector, useDispatch} from "react-redux"
import {getFiltrado} from '../../redux/actions/actions'

//CSS
import s from './filtroDemo.module.css'


export default function Filtro(){
    const dispatch = useDispatch()
    // const cards = useSelector(state => state.recipes)

   
    
    function onClick (){
        dispatch(getFiltrado())
    }

    return(
        <div>
            <button className={s.btn} onClick={onClick}>Filtro por Score</button>
        </div>
    )
}