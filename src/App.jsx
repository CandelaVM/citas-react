import Header from "./componentes/header.jsx"
import ListadoPaciente from "./componentes/listadoPaciente.jsx"
import Formulario from "./componentes/formulario.jsx"

import { useEffect, useState } from "react";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)

  }

  useEffect(()=>{
    const obtenerListado = () => {
    const registroListado = JSON.parse(localStorage.getItem('pacientes'))??[]
    setPacientes(registroListado);
  } 
  obtenerListado();
  },[]);

  //Este useEffect se va a ejecutar cada vez que cambie "pacientes"
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  return (
    <div className="container mx-auto mt-15">
      <Header />
      <div className="md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente} />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}
export default App;