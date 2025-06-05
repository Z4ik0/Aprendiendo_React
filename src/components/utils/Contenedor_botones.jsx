import { Iniciar_sesion } from "./Iniciar_sesion"
import { Crear_cuenta } from "./Crear_cuenta"

export const Contenedor_botones = () => {
  return (
    <div className='col-12 d-flex flex-column flex-md-row g-2 justify-content-around'>
        <Iniciar_sesion />
        <Crear_cuenta />
    </div>
  )
}
