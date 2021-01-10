import React from 'react';
import getProductArray from './ProductsData';
import {Link} from 'react-router-dom';

function ProductDetail(props) {
  const products = getProductArray();

  console.log(props);

  return (
    <div className="wrap shop product-detail">
      <Link to="/shop"><p class="back">‹ Back to shop</p></Link>
      <h1>{products[props.match.params.index].title}</h1>
      <img src={products[props.match.params.index].src} alt={products[props.match.params.index].title} />
      <p>Price: {products[props.match.params.index].price} GBP</p>
      <button onClick={() => props.addToCart(products[props.match.params.index])}>Add to basket</button>
    </div>
  );
}

export default ProductDetail;
