import './App.css';

/* import ItemListContainer from './containers/ItemListContainer'; */


import Routing from './routes';
 /* import { useEffect } from 'react';
import algoritmoGuardadoAutomático from './services/guardarProductos';  */

function App() {
  
   /*  useEffect(()=>{
      algoritmoGuardadoAutomático();
    }, [])  */
  
  return (
    <Routing/>
  );
}

export default App;
