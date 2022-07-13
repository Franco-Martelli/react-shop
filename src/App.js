import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import ItemListenContainer from './componentes/ItemListenContainer';
import ItemCount from './componentes/ItemCount';

function App() {
  return (
    <div classNameName="App">
      <NavBar/>
          <ItemListenContainer/>
        <ItemCount />
    </div>
  );
}

export default App;
