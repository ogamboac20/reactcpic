import logo from './logo.svg';
import './App.css';
import MiPerfil from './Componentes/MiPerfil/MiPerfil';
import Opciones from './Componentes/Opciones/Opciones';
import MiPerfilDetalle from './Componentes/MiPerfil/MiPerfilDetalle';
import LogoPerfil from './imagenperfil.png'
function App() {
  return (
    <div className="App">
    <header>
      <MiPerfil Nombre="Olger Gamboa Castillo"  Imagen={logo} ></MiPerfil>
    </header>
<section>
  <nav>
      <Opciones></Opciones>
  </nav>
  
  <article className="App-link" >
  <MiPerfilDetalle Personaje="Iron-man" Nombre="Olger Gamboa Castillo" Imagen={LogoPerfil} Carrera="Ing. Sistema- Enfasis en desarrollo" ></MiPerfilDetalle>
  </article>
</section>

<footer>
  <p>Curso react cpic - proyecto final </p>
</footer>
    </div>
  );
}

export default App;
