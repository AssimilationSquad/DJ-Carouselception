import React from 'react';
import Photos from './Photos.jsx';
import InfoPane from './InfoPane.jsx';

const Listing = props => (
  <div className="listing">
    <Photos listing={props.listing} />
    <InfoPane listing={props.listing} />
  </div>
);

export default Listing;
