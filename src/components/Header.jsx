import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({
    presupuesto, setPresupuesto, isValidPresupupuesto, setIsValidPresupupuesto 
}) => {

    return (
        <header>
            <h1>Planificador de gastos</h1>
            {isValidPresupupuesto ? (<p>presupuesto</p>): (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupupuesto={setIsValidPresupupuesto}
                />    
            )}
           
        </header>
    )
}

export default Header
