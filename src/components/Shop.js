import React from 'react';
import ProductCard from './ProductCard';
import getProductArray from './ProductsData';
import {Link} from 'react-router-dom';

function Shop() {
  const products = getProductArray();

  return (
    <div className="wrap shop">
      <h1>The 2020 Replicars Collection</h1>

      <div className="products-list">
        {products.map((product, index) => (
          <Link to={`/shop/${index}`}><ProductCard details={product} /></Link>
        ))}
      </div>      
    </div>
  );
}

export default Shop;
