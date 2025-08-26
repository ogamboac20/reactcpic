import React, { useState } from "react";
import './contactos.css'
export default function Contactos() {
  const [contactos, setContactos] = useState([]);
  const [formularioactivo, setformularioactivo] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [filtro, setFiltro] = useState("");
  const[modotabla, setModoTabla]=useState(true);

  
  const filtrados = contactos.filter((p) => {
            const q = (filtro ?? "").trim().toLowerCase();
            if (q === "") return true;

            const nombre = p.nombre?.toLowerCase() ?? "";
            const email = p.email?.toLowerCase() ?? "";
            const telefono = String(p.telefono ?? "").toLowerCase();

            return (
                nombre.includes(q) ||
                email.includes(q) ||
                telefono.includes(q)
            );
            });


  const limpiarCampos = () => {
    setForm({ nombre: "", email: "", telefono: "" });
    setformularioactivo(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
     setFiltro("");
    setContactos((prev) => [...prev, { ...form, id: Date.now() }]);
    setFiltro("");
    limpiarCampos();
    setformularioactivo(false);
  };

  const eliminarContacto = (id) => {
    setContactos((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="cardContactos" >
      <h2>Contactos</h2>
      <label>Buscar por nombre</label><input onChange={(e) => setFiltro(e.target.value)} placeholder="Digite el nombre a buscar.."></input>
      { modotabla?(<div><button onClick={() => setModoTabla(!modotabla)}>Modo lista</button>
      <table className="tablacontactos" border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((e) => (
            <tr key={e.id}>
              <td>{e.nombre}</td>
              <td>{e.email}</td>
              <td>{e.telefono}</td>
              <td>
                <button onClick={() => eliminarContacto(e.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table></div>):(
        <div><button onClick={() => setModoTabla(!modotabla)}>Modo tabla</button>
        <ul >
          {filtrados.map((e) => (
            <li className="lista"  key={e.id}>
              <strong>{e.nombre}</strong>
              <strong>{e.email}</strong>
              <strong>{e.telefono}</strong>
                <button onClick={() => eliminarContacto(e.id)}>Eliminar</button>
            </li>
          ))}
        </ul></div>
      )}

      {formularioactivo ? (
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label><br />
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          /><br />

          <label>Email:</label><br />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo"
          /><br />

          <label>Telefono:</label><br />
          <input
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Escriba tu telefono..."
          /><br />
          <button type="submit">Enviar</button>
          <button type="button" onClick={limpiarCampos}>Limpiar</button>
        </form>
      ) : (
        <button onClick={() => setformularioactivo(!formularioactivo)}>Agregar</button>
      )}
    </div>
  );
}
