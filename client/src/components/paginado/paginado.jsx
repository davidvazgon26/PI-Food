import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {filterPag} from '../../redux/actions/actions'

import s from './paginado.module.css'
var paginado = 9
export default function Paginado(){
    let allRecipesFilter = useSelector((state)=>state.filtroRecipes)
    const [count, setCount] = useState(0)
    const [max, setMax] =useState(paginado)
    let dispatch = useDispatch();

    useEffect(()=>{dispatch(filterPag(count, max))})
    
    function pagAnt(){
        setMax(max<=paginado?max:max-paginado)
        setCount(count<=0?count:count-paginado)
    }
    
    function pagSig(){
        var total = allRecipesFilter.length
        setMax(max>=total?max:max+paginado)
        setCount(count>=total-paginado?count:count+paginado)
    }

    const tot = Math.ceil(allRecipesFilter.length/paginado)

    const paginas = []
    for (let i = 1; i < tot+1; i++) {
        paginas.push(i);
    }

    return(<div className={s.PagContainer} >
        <button  onClick={pagAnt}>Pag. Anterior</button>
            <ul>
                {paginas.map(item=>{
                    return <li key={item} onClick={()=>{setCount((item*paginado)-paginado) 
                        setMax(item*paginado)
                    }}>{item}</li>
                    
                })}
            </ul>
        <button onClick={pagSig}>Pag. Siguiente</button>
    </div>
    )
}