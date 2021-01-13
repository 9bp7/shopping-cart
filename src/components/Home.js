import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="wrap home">
      <h1>The <span className="font-2">highest-quality</span> Formula 1 Motor Car Replicas for the <span className="font-2">most devoted</span> of racing fans.</h1>
      <Link to="/shop"><button>Shop the 2020 Collection &raquo;</button></Link>
      <img src={process.env.PUBLIC_URL + "/img/ferrari-trsp.png"} alt="Ferrari F1 Car" />
    </div>
  );
}

export default Home;
