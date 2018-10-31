import React from 'react';
import Photos from './Photos.jsx';
import InfoPane from './InfoPane.jsx';

const Listing = props => (
  <div className="listing" style={{ order: props.order, transform: `translateX(calc(${props.transform}%)` }}>
    <Photos listing={props.listing} />
    <InfoPane listing={props.listing} />
  </div>
);

export default Listing;
