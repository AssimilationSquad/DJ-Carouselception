import React from 'react';

(props) => (
  <div className="listing">
    <Photos listing={props.listing} />
    <InfoPane listing={props.listing} />
  </div>
)