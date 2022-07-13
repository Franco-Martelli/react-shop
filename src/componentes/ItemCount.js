import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const ItemCount = () => {

    const [cantidad, setcantidad] = useState (1)

    const sumar = () => {
        setcantidad(cantidad +1);

    }

    const restar = () => {
        setcantidad(cantidad -1);
    }

    return(
        <div>
            <h4>botellas</h4>
            <div >
                <button onClick={restar} >-</button>
                <p>{cantidad}</p>
                <button  onClick={sumar} >+</button>
            </div>
            <button>agregar al carrito</button>
        </div>

    );
}

export default ItemCount;