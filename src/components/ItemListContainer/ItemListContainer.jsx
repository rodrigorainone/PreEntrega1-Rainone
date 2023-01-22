import React from 'react';

const ItemListContainer = ({texto}) => {
    return (        
        <div className="container-fluid text-center mt-5">
            <p className="display-3">Bienvenido  {texto} ! </p>
        </div>
    );
}

export default ItemListContainer;
