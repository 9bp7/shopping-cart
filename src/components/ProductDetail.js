import React, {useState} from 'react';
import getProductArray from './ProductsData';
import {Link} from 'react-router-dom';

function ProductDetail(props) {
  let [showCartButton, setShowCartButton] = useState(false);
  const products = getProductArray();

  const addToCart = () => {
    props.addToCart(products[props.match.params.index]);
    setShowCartButton(true);
  }

  return (
    <div className="wrap shop product-detail">
      <Link to="/shop"><p class="back">‹ Back to shop</p></Link>
      <h1>{products[props.match.params.index].title}</h1>
      <img src={process.env.PUBLIC_URL + products[props.match.params.index].src} alt={products[props.match.params.index].title} />
      <p>Price: {products[props.match.params.index].price} GBP</p>
      <button onClick={addToCart}>Add to basket</button>
      { showCartButton
        ? <Link to="/cart"><button>Go to checkout &raquo;</button></Link>
        : null
      }
    </div>
  );
}

export default ProductDetail;
