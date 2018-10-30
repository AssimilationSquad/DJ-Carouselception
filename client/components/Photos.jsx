import React from 'react';

const Photos = props => (
  <div className="photos">
    <img src={props.listing.imgs[0]} />
  </div>
);

export default Photos;
