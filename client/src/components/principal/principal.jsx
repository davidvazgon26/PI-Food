import Recipes from '../recipes/recipes.jsx'
import SearchBar from '../searchBar/searchbar.jsx'
import OrderABC from '../order/orderABC.jsx'
import OrderByScore from '../order/orderByScore.jsx'
import NavBar from '../navbar/navbar.jsx'
import FiltrarDieta from '../filtrados/filtroDieta.jsx'
import FiltroAPINoAPI from '../filtrados/filtroApiNoApi.jsx'
import Paginado from '../paginado/paginado.jsx'
import Reset from '../reset/reset.jsx'
import Footer from '../footer/footer.jsx'

import s from './principal.module.css'

export default function Principal () {
    return(
        <div className={s.fondo}>
        <NavBar/>
        <details className={s.menu}>
            <summary>Desplegar filtros</summary>
                <div>
                    <OrderABC/>
                    <OrderByScore/>
                    <FiltrarDieta/>
                    <FiltroAPINoAPI/>
                    <SearchBar/>
                    <Reset/>
                </div>
        </details>

            <div>
                <Paginado/>
            </div>
            
            <Recipes/>
            <Footer/>


        </div>
    )
}