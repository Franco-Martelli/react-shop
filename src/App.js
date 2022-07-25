import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Containters/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <div className='cont'>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
