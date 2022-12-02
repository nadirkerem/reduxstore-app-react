import React, { useEffect } from 'react';
import axios from 'axios';

import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../features/product/productSlice';

const ProductList = () => {
  const { allProducts } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  // createAsyncThunk!!
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='ui grid container'>
      <ProductItem />
    </div>
  );
};
export default ProductList;
