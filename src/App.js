import './App.css';
import Navbar from './components/NavBar/Navbar';

import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ItemListContainer greeting={"Hello, initializing page...."}/>
   
    </div>
  );
}

export default App;
