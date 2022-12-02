import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../features/product/productSlice';

const SingleProduct = () => {
  const { singleProduct } = useSelector((store) => store.product);
  const { image, title, price, category, description } = singleProduct;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchSingleProduct();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className='ui grid container'>
      {singleProduct.length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className='ui placeholder segment'>
          <div className='ui two column stackable center aligned grid'>
            <div className='ui vertical divider'></div>
            <div className='middle aligned row'>
              <div className='column lp'>
                <img className='ui image' src={image} />
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h2>
                  <a className='ui teal tag label'>${price}</a>
                </h2>
                <h3 className='ui block'>{category}</h3>
                <p>{description}</p>
                <div className='ui vertical animated button' tabIndex='0'>
                  <div className='hidden content'>
                    <i className='shop icon'></i>
                  </div>
                  <div className='visible content'>Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleProduct;
