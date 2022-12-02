import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductItem = () => {
  const { allProducts } = useSelector((store) => store.product);

  const renderList = allProducts.map((product) => {
    const { id, image, title, price, category } = product;
    return (
      <div className='four wide column' key={id}>
        <Link to={`/product/${id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};
export default ProductItem;
