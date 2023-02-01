import {useState,useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import Itemlist from '../ItemList/Itemlist';


const ItemListContainer = () => {    
    
        const [productos,setProductos] = useState([]);
        
        const {idCategoria} = useParams()
        useEffect(()=>{ 
            if (idCategoria){
                let aux;
                switch (idCategoria) {
                    case 'Computadoras':
                        aux=1;
                      break;
                    case 'Celulares':
                        aux=2;
                    break;                        
                    case 'Televisores':
                        aux=3;
                      break;
                    case 'Electronica':
                        aux=4;
                    break;
                }
                fetch('../json/productos.json')
                .then(response => response.json())
                .then(items => {                    
                    const products = items.filter(prod => prod.idCategoria ===aux)                
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
