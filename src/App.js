import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer';

/* import ItemListContainer from './containers/ItemListContainer'; */

function App() {
  return (
    <div className="App">
     <Navbar/>
    {/*  <ItemListContainer greeting={"Hello, initializing page...."}/> */}
   <ItemDetailContainer/>
    </div>
  );
}

export default App;
