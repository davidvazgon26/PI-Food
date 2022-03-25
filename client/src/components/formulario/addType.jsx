import {useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios'
import { useEffect } from 'react'

//CSS
import s from './addType.module.css'
import {getTypes} from '../../redux/actions/actions'

export default function AddType(){
    const [diet, setDiet] = useState();
    const [cont, setCont] = useState(0);
    const [errorInput, setErrorInput] = useState(true)
    
    // let types = useSelector((state)=> state.types)
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTypes())
    },[cont, dispatch])
    
    function onSubmit(event){
        event.preventDefault()
        axios.post("/api/types",diet)
        .then(response => {
            console.log(response)
        })
       document.querySelector('.inputDiet').value=""
        setCont(cont+1)
    }
    
    function onInputChange(event){
        console.log(event.target.name)
        event.preventDefault();
        if (event.target.name === 'title') {
            if (!/^[\s\S]{0,20}$/.test(event.target.value)) {
                setErrorInput('Solo se aceptan maximon 20 caracteres para nombres de Dieta')
            } else {
                setErrorInput('')
            }
        } 
        setDiet({
            ...diet,
            diet: event.target.value,
        })
    }

    return (
      <div>
        <form className={s.formRecipe} onSubmit={onSubmit}>
          <label>Type:</label>
          <input
            id={s.title}
            className="inputDiet"
            name="title"
            type="text"
            placeholder="Diet Name"
            onChange={onInputChange}
            
          />
          {!errorInput? null : <h4 className={s.errorname}>{errorInput}</h4>}
          <div className={s.btnDiv}>
            <input className={errorInput?s.btn2:s.btnSubmit} type="submit" value="Add Diet" disabled={errorInput?true:false} />
          </div>
        </form>
      </div>
    );
}