import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import ItemListenContainer from './ItemListenContainer';

function App() {
  return (
    <div classNameName="App">
      <NavBar/>
        <div>
          <ItemListenContainer/>
        </div>
    </div>
  );
}

export default App;
