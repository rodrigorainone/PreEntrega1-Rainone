
import Item from '../Item/Item';

const Itemlist = ({products}) => {
    return (
        <>
            {products.map(producto =>  <Item key={producto.id} item={producto}/>)
            } 
        </>
    );
}

export default Itemlist;
