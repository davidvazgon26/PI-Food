//CSS
 import s from './about.module.css'
 import { DiHtml5, DiNodejs, DiPostgresql, } from "react-icons/di";
 import { SiRedux, SiSequelize,SiExpress, SiJavascript, SiReactrouter, SiCss3, SiWebpack, SiHeroku, SiVercel, SiGit } from "react-icons/si";


//componentes
import NavBar from '../navbar/navbar.jsx'
import Footer from '../footer/footer.jsx'


 function About(){
    return (
      <div className={s.externo}>
        <div className={s.divMenu}>
        <NavBar />
        </div>
        <h2 className={s.titulo}>Sobre el Proyecto</h2>
        <br />
        <section>
          <p className={s.parrafo}>
            <div className={s.icons}>
              <DiHtml5 className={s.iconInter} />
              <SiGit className={s.iconInter} />
              <DiNodejs className={s.iconInter} />
              <DiPostgresql className={s.iconInter} />
              <SiRedux className={s.iconInter} />
              <SiSequelize className={s.iconInter} />
              <SiExpress className={s.iconInter} />
              <SiJavascript className={s.iconInter} />
              <SiReactrouter className={s.iconInter} />
              <SiCss3 className={s.iconInter} />
              <SiWebpack className={s.iconInter} />
              <SiHeroku className={s.iconInter} />
              <SiVercel className={s.iconInter} />
            </div>
            Proyecto individual para la certificación como desarrollador Web
            Full Stack en{" "}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Henry
            </a>{" "}
            de David Vazquez. Se utilizaron la{" "}
            <a
              href="https://spoonacular.com/food-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              API Food
            </a>
            ,{" "}
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PostgreSQL
            </a>{" "}
            y{" "}
            <a
              href="https://sequelize.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sequelize
            </a>{" "}
            para la base de datos, así como{" "}
            <a
              href="https://expressjs.com/es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Express
            </a>
            ,{" "}
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              Javascript
            </a>{" "}
            y{" "}
            <a
              href="https://nodejs.org/es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node
            </a>{" "}
            para el backend.
            <br />
            <br />
            En el Frontend se utilizaron{" "}
            <a
              href="https://es.reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{" "}
            para la creación de componentes,{" "}
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router
            </a>{" "}
            para la creación y administración de rutas,{" "}
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>{" "}
            para manejar estados dentro de la aplicación y{" "}
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              Javascript
            </a>{" "}
            como lenguaje de desarrollo entre otras tecnologías como{" "}
            <a
              href="https://developer.mozilla.org/es/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML
            </a>{" "}
            para el maquetado,{" "}
            <a
              href="https://developer.mozilla.org/es/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS
            </a>{" "}
            para los estilos y{" "}
            <a
              href="https://webpack.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Webpack
            </a>{" "}
            para la administración de los modulos y poder entre otras tareas
            utilizar su configuración para el manejo de estilos locales por
            medio de la adición de{" "}
            <a
              href="https://es.wikipedia.org/wiki/Funci%C3%B3n_hash"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hash
            </a>{" "}
            a los módulos de CSS para obtener los archivos finales como el{" "}
            <a
              href="https://webpack.js.org/concepts/#root"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bundler
            </a>{" "}
            el cual sirve entre otros archivos para hacer el Deploy de la
            aplicación a producción por nombrar alguno.
            <br />
            <br />
          </p>
        </section>
        <br />
        <section>
          <p className={s.parrafo}>
            También se utilizaron algunas otras herramientas para la
            organización del proyecto como{" "}
            <a
              href="https://miro.com/app/board/uXjVOFmBc-A=/?invite_link_id=313015078471"
              target="_blank"
              rel="noopener noreferrer"
            >
              Miro
            </a>{" "}
            para los mapas mentales y de seguimiento a tareas pendientes,
            integración de imágenes, contenido y documentación .
          </p>
        </section>
        <br />
        <section className={s.parrafoFinal}>
          <p className={s.parrafo}>
          Se libero la aplicación a producción utilizando Heroku para el back end y Vercel para el front end quedando alojada la app en la siguiente ruta: <a
              href="https://pi-food-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >API Food</a>
          </p>
        </section>
        <div className={s.footer}>
          <Footer />
        </div>
      </div>
    );
}

export default About

