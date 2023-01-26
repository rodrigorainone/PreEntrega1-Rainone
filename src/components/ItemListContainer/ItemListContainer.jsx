import {useState,useEffect}  from 'react'
import Itemlist from '../ItemList/Itemlist';

const ItemListContainer = () => {    
    
        const [productos,setProductos] = useState([]);

        useEffect(()=>{
            fetch('./json/productos.json')
                .then(response => response.json())
                .then(products => {                    
                    const productsList = Itemlist({products})
                    setProductos(productsList)               
                })
        },[]);   
       
    return (        
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
