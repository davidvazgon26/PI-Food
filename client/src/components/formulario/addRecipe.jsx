import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import axios from "axios"

import {getTypes} from '../../redux/actions/actions'
import AddType from './addType.jsx'

//CSS
import s from './addRecipe.module.css'

export default function AddRecipe(){
    const [errorInput, setErrorInput] = useState('El Titulo solo acepta letras, sin numeros');  // Para los input de texto
    const [errorInputN1, setErrorInputN1] = useState('Este campo solo acepta valores de 0 a 100');  // Para los input de numeros
    const [errorInputN2, setErrorInputN2] = useState('Este campo solo acepta valores de 0 a 100');  // Para los input de numeros
    const [errorImage, setErrorImage] = useState(true); // Para la imagen
    const [errorSummary,setErrorSummary] = useState(true)
    const [recipe, setRecipe] = useState({
        title:"",
        spoonacularScore:"",
        healthScore:"",
        summary:"",
        instructions:"",
        image:'https://i.pinimg.com/originals/76/c6/46/76c64646e9be7aef25124d07b20aa5e2.jpg',
    })
    let types = useSelector((state)=> state.types)
    let dispatch = useDispatch();
    let navigate = useNavigate()

    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])

    function onSubmit(event) {
      event.preventDefault();
      let arr = onCheckChange();
      axios
        .post("/api/recipes", recipe)
        .then(function (response) {
          arr.forEach((item) => {
            axios
              .post(`/api/recipes/${response.data.id}/type/${item}`)
              .then((response) => response.data);
          });
          navigate("/recipes");
        })
        .catch((error) => console.error(error));
    }
    
    function onInputChange(event) {
      event.preventDefault();
      if (event.target.name === 'title') {
        if(!/^([A-z]+[\s]*)+$/.test(event.target.value)){
            setErrorInput('El Titulo solo acepta letras, sin numeros');
        }else{
            setErrorInput('')
        }
      } 

      if (event.target.name === "spoonacularScore" ) {
        if(!/^(\\d|[1-9]\\d|100)|^\d{1,2}$/.test(event.target.value)){
            setErrorInputN1('Este campo solo acepta valores de 0 a 100')
        }else{
            setErrorInputN1('')
        }
      }
      if (event.target.name === "healthScore") {
        if(!/^(\\d|[1-9]\\d|100)|^\d{1,2}$/.test(event.target.value)){
            setErrorInputN2('Este campo solo acepta valores de 0 a 100')
        }else{
            setErrorInputN2('')
        }
      }

      //^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$

      if(event.target.name === 'image'){
          if (!/^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/.test(event.target.value)) {
              setErrorImage('El dato ingresado no tiene la forma de una url valida')
          } else {
            setErrorImage('')
          }
      }

      if (event.target.name === 'summary') {
          if (!/^[\s\S]{0,250}$/.test(event.target.value)) {
              setErrorSummary('Solo se aceptan 250 caracteres para el resumen')
          } else {
            setErrorSummary('')
          }
      } 
      setRecipe({
        ...recipe,
        [event.target.name]: event.target.value,
      });
    }

    function onCheckChange() {
      let checks = document.querySelectorAll(".checks");
      let arr = [];
      checks.forEach((item) => {
        if (item.checked === true) {
          arr.push(item.id);
        }
      });
      return arr;
    }

return (
  <div className={s.contenedorForm}>
    <div>
      <input
        className={s.btnRegresar}
        type="submit"
        value="Regresar"
        onClick={() => navigate(-1)}
      />
    </div>
    <h2 className={s.h2}>Form for Add new Recipes or Diets</h2>
    <div className={s.containerDivForms}>
      <div>
        <form className={s.formRecipe} onSubmit={onSubmit}>
          <label>Title:</label>
          <input
            className={s.title}
            name="title"
            type="text"
            placeholder="Recipe Name"
            onChange={onInputChange}
          />
          {!errorInput? null : <h4 className={s.errorname}>{errorInput}</h4>}
          <label>Score:</label>
          <input
            className={s.title}
            name="spoonacularScore"
            type="number"
            placeholder="0 to 100"
            onChange={onInputChange}
          />
          {!errorInputN1? null : <h4 className={s.errorname}>{errorInputN1}</h4>}
          <label>Health Score:</label>
          <input
            className={s.title}
            name="healthScore"
            type="number"
            placeholder="0 to 100"
            onChange={onInputChange}
          />
          {!errorInputN2? null : <h4 className={s.errorname}>{errorInputN2}</h4>}
          <label>Summary:</label>
          <textarea
            name="summary"
            type="text"
            rows="8"
            cols="40"
            onChange={onInputChange}
          />
           {!errorSummary? null : <h4 className={s.errorname}>{errorSummary}</h4>}
          <label>Instructions:</label>
          <textarea
            name="instructions"
            type="text"
            rows="8"
            cols="40"
            onChange={onInputChange}
          />
          <label>Image:</label>
          <input
            className={s.title}
            name="image"
            type="url"
            placeholder="image url"
            onChange={onInputChange}
          />
          {!errorImage? null : <h4 className={s.errorname}>{errorImage}</h4>}
          <label className={s.types}>Types:</label>
          <div className={s.formChecks}>
            {types.map((tipo) => {
              return (
                <div key={tipo.id} className={s.divCheck}>
                  <input
                    type="checkbox"
                    className="checks"
                    name={tipo.diet}
                    id={tipo.id}
                    onChange={onCheckChange}
                    value={tipo.diet}
                  />
                  <label className={s.labelCheck} htmlFor={tipo.diet}>
                    {tipo.diet}
                  </label>
                </div>
              );
            })}
          </div>
          <div className={s.btnDiv}>
            <input className={errorInput?s.btn2:s.btnSubmit} type="submit" value="Add recipe" disabled={errorInput?true:false}   />
          </div>
        </form>
      </div>
      <div>
        <AddType />
      </div>
    </div>
  </div>
);

}