import logo from './logo.svg';
import './App.css';
import MiPerfil from './Componentes/MiPerfil/MiPerfil';
import MiPerfilDetalle from './Componentes/MiPerfil/MiPerfilDetalle';
import LogoPerfil from './imagenperfil.png'
import Contactos from './Componentes/Contactos/contactos';
function App() {
  return (
    <div className="App">
    <header>
      <MiPerfil Nombre="Olger Gamboa Castillo"  Imagen={logo} ></MiPerfil>
    </header>
<section>
  <nav>
      <div><p>Sitio proyecto cpic react</p></div>
  </nav>
  
  <article  >
   <MiPerfilDetalle Personaje="Iron-man" Nombre="Olger Gamboa Castillo" Imagen={LogoPerfil} Carrera="Ing. Sistema- Enfasis en desarrollo" ></MiPerfilDetalle>
<Contactos></Contactos>
  </article>
</section>

<footer>
  <p>Curso react cpic - proyecto final </p>
</footer>
    </div>
  );
}

export default App;
