import React from 'react';

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-card-inner">
        <img src={props.details.src} alt=""/>
        <p>{props.details.title}</p>
        <p>{props.details.price} GBP</p>
      </div>     
    </div>
  );
}

export default ProductCard;
