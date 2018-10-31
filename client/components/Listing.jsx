import React from 'react';
import Photos from './Photos.jsx';
import InfoPane from './InfoPane.jsx';

const Listing = props => (
  <div className="listing" style={{ transform: `translateX(${props.transform}vw)` }}>
    <Photos listing={props.listing} />
    <InfoPane listing={props.listing} />
  </div>
);

export default Listing;
