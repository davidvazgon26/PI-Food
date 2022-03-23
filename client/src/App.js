import { Routes, Route } from "react-router-dom";

//Componentes
import Principal from './components/principal/principal.jsx'
import NoMatch from './components/noMatch/noMatch.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Detail from './components/recipeDetail/recipeDetail.jsx'
import AddRecipe from './components/formulario/addRecipe.jsx'

import './App.css';

function App() {
  return (
    <>

    <Routes>
          <Route index  element={<Home/>}/>
          <Route path="/recipes"  element={<Principal/>} />
          <Route path="/recipes/:idReceta"  element={<Detail/>} />
          <Route path="/agregar"  element={<AddRecipe/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="*" element={<NoMatch/>} />
    </Routes>
    
  </>
  );
}

export default App;
