//hook es una funcionalidad que permite cambiar estados sin requerir declarar clases. Siempre deben de colocar arriba, antes del return (que es como el body en javascript)
import { useState, useEffect } from "react";
import Error from "./error.jsx";
//useState estado de algun componente de mi proyecto. Puede ser de cada componente o pueden compartir estado entre uno y otro.
function Formulario ({pacientes, setPacientes, paciente, setPaciente}){
  const [mascota, setMascota]=useState('');
  const [propietario, setPropietario]=useState('');
  // const [telefono, setTelefono]=useState('');
  const [email, setEmail]=useState('');
  const [fechacita, setFechacita]=useState('');
  const [hora, setHora]=useState('');
  const [sintomas, setSintomas]=useState('');
  const [alta, setAlta]=useState('');
  const [error, setError]=useState(false);

  const generarId = () =>{
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)
    return random + fecha;
  }

   const validacionFormulario=(e)=>{
    e.preventDefault();
    if([mascota, propietario, email, fechacita, sintomas].includes('')){
      console.log('Hay al menos un campo vacío')
      setError(true)
      return;
    }

    setError(false);
    const objPaciente={mascota, propietario, email, fechacita, sintomas}
      if(paciente.id){
        objPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente:pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})

    }else{
      objPaciente.id=generarId();
      setPacientes([...pacientes,objPaciente])
    }
    setMascota('');
    setPropietario('');
    // setTelefono('');
    setEmail('');
    setFechacita('');
    // setHora('');
    // setAlta('');
    setSintomas('');
  }
  useEffect(()=>{
    if(Object.keys(paciente).length>0) 
    {
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFechacita(paciente.fechacita)
      // setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
 }, [paciente])
 

  return (
    <div className="md:w-1/2 mx-5 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Registro de Pacientes</h2>
        <p className="mt-5 text-center text-lg mb-10">Añade Nuevos Pacientes {""}<span className="text-indigo-400 font-bold">Admisión</span></p>

        <form className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md" 
        onSubmit={validacionFormulario}>

          {error && 
            <Error><p>Todos los campos son obligatorios</p></Error>
          }

        <div>
          <label htmlFor="mascota" className="block uppercase font-bold text-gray-700">Nombre de Mascota</label>
          <input
          id="mascota"
          type="text"
          placeholder="Nombre de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setMascota(e.target.value)}
          value={mascota}/>
        </div>

        <div>
          <label htmlFor="propietario" className="block uppercase font-bold text-gray-700 ">Propietario</label>
         <input
          id="propietario"
          type="text"
          placeholder="Nombre del propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setPropietario(e.target.value)}
          value={propietario}/>
        </div>

        {/* <div>
          <label htmlFor="telefono" className="block uppercase font-bold text-gray-700">Telefono</label>
          <input
          id="telefono"
          type="numero"
          placeholder="+34 "
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setTelefono(e.target.value)}
          value={telefono}/>
        </div>        
       */}
        <div>
          <label htmlFor="email" className="block uppercase font-bold text-gray-700">Correo Electronico</label>
          <input
          id="email"
          type="email"
          placeholder="Email del Propietario"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}/>
          
        </div>

        <div>
          <label htmlFor="fechacita" className="block uppercase font-bold text-gray-700 ">Fecha de cita</label>
          <input
          id="fecha"
          type="date"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setFechacita(e.target.value)}
          value={fechacita}/>
          
        </div>
        
        {/* <div>
          <label htmlFor="hora" className="block uppercase font-bold text-gray-700 ">Hora de Cita</label>
          <input
          id="hora"
          name="hora"
          type="time"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setHora(e.target.value)}
          value={hora}/>        
        </div> */}
        
        {/* <div>
          <label htmlFor="alta" className="block uppercase font-bold text-gray-700 ">Alta</label>
          <input
          id="alta"
          type="date"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setAlta(e.target.value)}
          value={alta}/>
        </div> */}

        <div>
          <label htmlFor="sintomas" className="block uppercase font-bold text-gray-700 ">Sintomas</label>
          <textarea
          id="sintomas"
          name="sintomas"
          placeholder="Describe los sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
          onChange={(e)=>setSintomas(e.target.value)}
          value={sintomas}/>
        </div>

          <input type="submit" className="bg-indigo-500 rounded-md text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors p-2 rounded-md;" value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}/>
    
      </form>
    </div>
  )
}

export default Formulario;