import React from 'react';

(props) => (
  <div className="infoPane">
    <span className="type">{props.listing.type} * </span>
    <span className="beds">{props.listing.beds} beds</span>
    <br />
    <span className="title">{props.listing.title}</span>
    <br />
    <span className="price">${props.listing.price} per night</span>
    <br />
    <span className="stars">{'⭐️'.repeat(props.listing.stars)}</span>
  </div>
)