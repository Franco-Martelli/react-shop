import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const ItemCount = (props) => {



    const [cantidad, setcantidad] = useState (1)

    const sumar = () => {
        setcantidad(cantidad +1);

    }

    const restar = () => {
        setcantidad(cantidad -1);
    }

    return(
        <div>
            <img src={props.thumbnailUrl}></img>
            <div>
                <h5> {props.title}  titulo</h5>
                <p>mas detalles</p>
                <h6>{props.precio} precio</h6>
                <button onClick={restar}> - </button>
                <p>{cantidad}</p>
                <button  onClick={sumar}> + </button>
            </div>
            <button>agregar al carrito</button>
        </div>

    );
}

export default ItemCount;