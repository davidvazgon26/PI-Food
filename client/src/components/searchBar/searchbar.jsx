import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {recipeSearch} from '../../redux/actions/actions'

//CSS
import s from './searchbar.module.css'


export default function SearchBar(){
    const [search,setSearch] = useState('')
    const dispatch = useDispatch();

    function onSubmit(event){
        event.preventDefault();
        dispatch(recipeSearch(search))
        setSearch("");
    }

    function onInputChange(event){
        event.preventDefault();
        setSearch(event.target.value);
    }
    return(
        <div className={s.container}>
            <form onSubmit={onSubmit}>
                <input className="inputSearch" id={s.inputSearch} type="text"  placeholder="Example: Filet" value={search} onChange={onInputChange}/>
                <input className={s.btn} type="submit" value='Search'/>
            </form>
        </div>
    )
}