import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const {modelo} = useParams()
    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.modelo === modelo)
            setProducto(item)
        })
    }, [])
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer;
