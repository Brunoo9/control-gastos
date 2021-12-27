import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupupuesto }) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e)=>{
        e.preventDefault();
        if (!presupuesto || presupuesto <= 0) {
            setMensaje('No es un prespuesto valido')
            setIsValidPresupupuesto(false);
            return;
                
        }
        setIsValidPresupupuesto(true);
        setMensaje(''); // reoniciamos el objeto mensaje 
        console.log('si es un numero');
        

    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario"  onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label className="">Definir presupuesto</label>
                    <input 
                        type="number" 
                        className="nuevo-presupuesto" 
                        placeholder="Añade tu prespuesto" 
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                    
                </div>
                <input 
                    type="submit" 
                    value="Añadir"
                />
               
            </form>
              {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </div>
    )
}

export default NuevoPresupuesto
