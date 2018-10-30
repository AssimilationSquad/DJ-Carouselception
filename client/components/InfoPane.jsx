import React from 'react';

const InfoPane = props => (
  <div className="infoPane">
    <span className="type-and-beds">{props.listing.type} · {props.listing.beds} beds</span>
    <span className="title">{props.listing.title}</span>
    <span className="price">${props.listing.price} per night</span>
    <span className="stars">{'⭐️'.repeat(props.listing.stars)}</span>
  </div>
);

export default InfoPane;
