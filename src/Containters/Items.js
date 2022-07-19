import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../Componentes/ItemCount';
import { Productos } from '../Utilidades.js/Products';

const Items = () => {
    return(
        <>
        <ItemCount 
        title= "gancia"
        precio= "500" 
        thumbnailUrl= "https://carrefourar.vtexassets.com/arquivos/ids/195245/7790950000160_11.jpg?v=637516045098470000"
        />
        <ItemCount 
        title= "fernet"
        precio= "750" 
        thumbnailUrl= "https://carrefourar.vtexassets.com/arquivos/ids/195245/7790950000160_11.jpg?v=637516045098470000"
        />
        <ItemCount 
        title= "gancia"
        precio= "500" 
        thumbnailUrl= "https://carrefourar.vtexassets.com/arquivos/ids/195245/7790950000160_11.jpg?v=637516045098470000"
        />
        </>
    );
}

export default Items