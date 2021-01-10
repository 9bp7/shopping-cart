import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <div className="wrap">
        <Link to="/"><h1 className="logo">Replicars</h1></Link>
        <ul>
          <Link to="/shop"><li>2020 Collection</li></Link>
          <Link to="/cart"><li>Cart ({props.cart.length})</li></Link>
        </ul>
      </div>      
    </nav>
  );
}

export default Nav;
