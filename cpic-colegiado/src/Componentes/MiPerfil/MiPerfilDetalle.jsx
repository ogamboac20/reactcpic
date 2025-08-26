
import './MiPerfil.css'
function MiPerfilDetalle({Imagen, Nombre, Carrera, Personaje }){
    return (
       <div class="card">
            <img src={Imagen}   alt="Foto" class="card-img" />
            <div class="card-content">
                <h2 class="card-name">{Nombre}</h2>
                <p class="card-career">{Carrera}</p>
                <p class="card-fav">Personaje favorito: {Personaje}</p>
            </div>
        </div>
)
}
export default MiPerfilDetalle;