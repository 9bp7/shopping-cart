import React, { useEffect, useState } from 'react';
import getProductArray from './ProductsData';
import {Link} from 'react-router-dom';

function Cart(props) {
  let allProducts = getProductArray();
  let [cartTotal, setCartTotal] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }


  const initCart = () => {
    setCartTotal(0);
    allProducts.forEach(product => {
      product.quantity = 0;
    })
  }

  const condenseCart = () => {
    let cartItems = props.cart;
    let totalPrice = 0;

    cartItems.forEach(cartItem => {
      allProducts.filter((product, index) => {
        if(product.title === cartItem.title) {
          product.quantity += 1;
          totalPrice += (+product.price.split(',').join(''));          
        }
      })
    });

    setCartTotal(totalPrice);
  }

  const removeFromCart = (item) => {
    props.removeFromCart(item);
  }

  useEffect(() => {
    initCart();
    condenseCart();
    return(
      allProducts = getProductArray()
    )
  }, [])

  if(cartTotal > 0) {
    return (
      <div className="wrap">      
        <div className="shop cart">
          <Link to="/shop"><p class="back">‹ Back to shop</p></Link>
          <table> 
            { allProducts.map(item => (
              item.quantity > 0 
              ? <tr>
                  <th><img src={item.src} alt='' /></th>
                  <th>{item.title}</th>
                  <th><span className="btn-basket" onClick={() => removeFromCart(item)}>−</span> {item.quantity} <span className="btn-basket">＋</span></th>
                  <th>{numberWithCommas((+item.price.split(',').join('')) * item.quantity)} GBP</th>
                </tr>
              : null
            )) }
            <tr>
              <th></th>
              <th></th>
              <th>Grand Total</th>
              <th>{numberWithCommas(cartTotal)} GBP</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th><button>Race to checkout &raquo;</button>  </th>
            </tr>          
          </table>   
        </div>
      </div>
    );
  } else {
    return(
      <div className="wrap shop product-detail">      
        <Link to="/shop"><p class="back">‹ Back to shop</p></Link>
        <h1>Cart is empty</h1>
      </div>
    )
  }  
}

export default Cart;
