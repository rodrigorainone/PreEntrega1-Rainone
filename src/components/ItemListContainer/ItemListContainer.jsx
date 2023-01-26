import {useState,useEffect}  from 'react'
import Itemlist from '../ItemList/Itemlist';

const ItemListContainer = () => {    
    
        const [productos,setProductos] = useState([]);

        useEffect(()=>{
            fetch('./PreEntrega1-Rainone/json/productos.json')
                .then(response => response.json())
                .then(products => {                    
                    const productsList = Itemlist({products})
                    setProductos(productsList)               
                })
        },[]);   
       
    return (        
        <div >
            {productos}
        </div>
    );
}

export default ItemListContainer;
