import React, {useState, useEffect} from 'react';
import ItemCount from '../Componentes/ItemCount';
import {getProducts } from '../Utilidades/Products';



const ItemListContainer = () => {

    const [products, setProducts] = useState()
    
    const getData = async() => {
        const result = await getProducts(2000)
        setProducts(result)
    
    }

    const onAdd = (param) => {
        console.log (`la cantidad comprada es ${param}`)
    }

    useEffect(() => {
      getData()
    }, [])

    if(!products) return null
    

    return(
        <>
        {
            products.map((item, index) =>
                <ItemCount
                  initial={1}
                  stock={5}
                  onAdd={onAdd}
                  key= {index}
                  title= {item.title}
                  precio= {item.precio}
                  thumbnailUrl= {item.thumbnailUrl}
                   /> 
                )
        }
        </>
    );
}

export default ItemListContainer