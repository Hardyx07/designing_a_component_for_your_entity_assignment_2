import React from 'react';
import Button from './button'; 

const Productcard = () => {
  const productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdCidzWsGA4OwBFNPfIlrXwCsdNc_9P5DEw&s'; // Replace with actual image URL
  const productName = 'Wind Jordan';
  const productPrice = '$69.99';

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">{productPrice}</p>
      <Button label="View Product" />
    </div>
  );
};

export default Productcard;
