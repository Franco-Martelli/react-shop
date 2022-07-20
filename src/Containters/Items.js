import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../Componentes/ItemCount';
import { Productos } from '../Utilidades/Products';


const Items = () => {
    return(
        <>
        {
            Productos.map(item =>
                <ItemCount 
                  key= {item.title}
                  title= {item.title}
                  precio= {item.precio}
                  thumbnailUrl= {item.thumbnailUrl}
                   /> 
                )
        }
        </>
    );
}

export default Items