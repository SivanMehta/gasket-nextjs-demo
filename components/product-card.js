import React from 'react';

export default function ProductCard(props) {
  const { name, retailer, score, icon, id } = props;
  return (
    <div className="card">
      <img src={ icon } className="card-img-top" alt="..." />
      <div className="card-body">
        <a href={ '/product/' + id }><h5 className="card-title">{ name }</h5></a>
        <p className="card-text">From { retailer }</p>
      </div>
    </div>
  )
}
