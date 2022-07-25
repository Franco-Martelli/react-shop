import  React, { useState } from 'react';
import '../Diseños/CardsItems.css'

const ItemCount = ({initial, stock, onAdd, title, precio, thumbnailUrl }) => {

    const [counter, setCounter] = useState(initial)

    const add = () => {
        if (counter < stock){
            setCounter(counter+1)
        }
     }

     const subtract = () => {
        if (counter > initial){
            const aux = counter-1
            setCounter(aux)
        }
     }


    return(
        <div className='ContainerCard'>
            <div className='Card'>
            <img src={thumbnailUrl} className='ImgCard' ></img>
            <div>
                <h5> {title}  </h5>
                <p>mas detalles</p>
                <h6> $ {precio}</h6>
            </div> 
            <div>
                <button onClick={subtract}> - </button>
                <p>{counter}</p>
                <button  onClick={add}> + </button>
            </div>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </div>
        </div>
     );
}

export default ItemCount;

