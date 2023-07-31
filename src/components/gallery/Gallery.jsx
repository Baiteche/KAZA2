import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './gallery.css';

export default function Gallery() {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('data/produit.json')
      .catch((err) => console.log(err))
      .then((response) => {
     
        setProducts(response.data);
      });
  }, []);

  return (
    <div className='gallery'>
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <div className='produit' key={product.id}>
            <Link to={`/${product.id}`}>
              <img className='image-gallery' src={product.cover} alt={product.name} />
            </Link>
            <div className='image-title'>{product.title}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
