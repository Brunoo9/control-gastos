import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [presupuesto,setPresupuesto] = useState(0);
  const [isValidPresupupuesto ,setIsValidPresupupuesto] = useState(false);

  return (
    <>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupupuesto={isValidPresupupuesto}
        setIsValidPresupupuesto={setIsValidPresupupuesto}

      />
    </>
    
  )
}

export default App
