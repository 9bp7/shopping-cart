import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="wrap home">
      <h1>We stock the highest quality Formula 1 Replica Cars for the classiest of racing fans</h1>
      <Link to="/shop"><button>Shop the 2020 Collection &raquo;</button></Link>
    </div>
  );
}

export default Home;
