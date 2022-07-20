import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '../Diseños/CardsItems.css'

const ItemCount = (props) => {

let is_ok = true;

let dinero = 1000;

let calcularDinero = (dinero) => {
    return dinero*1.10;
}

let prestamo = (time, task) => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(task)
            }, time);
        } else {
            reject("Error")
        }
    });
}

prestamo(2000, calcularDinero(dinero))
    .then(datos => {console.log(datos)})
    .catch(err => console.log(err))



    const [cantidad, setcantidad] = useState (1)

    const sumar = () => {
        setcantidad(cantidad +1);

    }

    const restar = () => {
        setcantidad(cantidad -1);
    }

    return(
        <div className='ContainerCard'>
            <div className='Card'>
            <img src={props.thumbnailUrl} className='ImgCard' ></img>
            <div>
                <h5> {props.title}  </h5>
                <p>mas detalles</p>
                <h6> $ {props.precio}</h6>
                <button onClick={restar}> - </button>
                <p>{cantidad}</p>
                <button  onClick={sumar}> + </button>
            </div>
            <button>AGREGAR AL CARRITO</button>
        </div>
        </div>
     );
}

export default ItemCount;