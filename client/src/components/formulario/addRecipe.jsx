import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

//CSS
import s from './addRecipe.module.css'

export default function AddRecipe(){
    const [recipe, setRecipe] = useState({
        title:"",
        spoonacularScore:"",
        healthScore:"",
        summary:"",
        instructions:"",
        image:"",
    })
    let types = useSelector((state)=> state.types)
    let dispatch = useDispatch();
    let navigate = useNavigate()

    function onSubmit(){}

    function onInputChange(){}

return(
    <div className={s.contenedorForm}>
        <div><input className={s.btnRegresar} type="submit" value="Regresar" onClick={()=>navigate(-1) } /></div>
        <h2 className={s.h2}>Form for Add new Recipes or Diets</h2>
        <div className={s.containerDivForms}>
            <div>
                <form className={s.formRecipe} onSubmit={onSubmit}>
                    <label>Title:</label>
                    <input className={s.title} name='title' type='text' placeholder="Recipe Name" onChange={onInputChange} />
                    <label>Score:</label>
                    <input className={s.title} name="spoonacularScore" type="number" placeholder="0 to 100" onChange={onInputChange} />
                    <label>Health Score:</label>
                    <input className={s.title} name="healthScore" type="number" placeholder="0 to 100" onChange={onInputChange} />
                    <label>Summary:</label>
                    <textarea name="summary" type="text" rows="8" cols="40" onChange={onInputChange} />
                    <label>Instructions:</label>
                    <textarea name="instructions" type="text" rows="8" cols="40" onChange={onInputChange} />
                    <label>Image:</label>
                    <input className={s.title} name="image" type="url" placeholder="image url" onChange={onInputChange} />
                    <label className={s.types}>Types:</label>
                    <div className={s.formChecks}>
                        {types.map((tipo)=>{
                            return(
                                <div key={tipo.id} className={s.divCheck}>
                                    <input type="checkbox" className="checks"  name={tipo.diet} id={tipo.id} value={tipo.diet}/>
                                    <label className={s.labelCheck} htmlFor={tipo.diet}>{tipo.diet}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div className={s.btnDiv}>
                        <input className={s.btnSubmit} type="submit" value="Add recipe"/>
                    </div>
                </form>
            </div>
            <div>Diets</div>
        </div>
    </div>
)

}