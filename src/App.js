import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar';
import Items from './Containters/Items';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <div className='cont'>
        <Items/>
      </div>
    </div>
  );
}

export default App;
