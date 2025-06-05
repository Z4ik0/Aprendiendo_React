import {Ejercicio_01} from "./components/Ejercicio_01";
import { Button } from "./components/utils/Button";
import { Contenedor_botones } from "./components/utils/Contenedor_botones";


function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">Hola UTSH</h1>
          </div>
        </div>
        
        <Ejercicio_01 />
        <Button />
        <Contenedor_botones />

      </div>
      {/* Mando Llamar componente externo */}
    </>
  );
}
export default App;
