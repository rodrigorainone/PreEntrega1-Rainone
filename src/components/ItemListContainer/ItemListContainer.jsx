import {useState,useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import Itemlist from '../ItemList/Itemlist';


const ItemListContainer = () => {    
    
        const [productos,setProductos] = useState([]);
        
        const {idCategoria} = useParams()
        useEffect(()=>{
            if (idCategoria){
                fetch('../json/productos.json')
                .then(response => response.json())
                .then(items => {   
                    const products = items.filter(prod => prod.idCategoria ===parseInt(idCategoria))                
                    const productsList = Itemlist({products})
                    setProductos(productsList)               
                })
            }        
            else{
                fetch('./json/productos.json')
                .then(response => response.json())
                .then(products => {                                
                    const productsList = Itemlist({products})
                    setProductos(productsList)               
                })
            }
        },[idCategoria]);   
        
    return (        
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
