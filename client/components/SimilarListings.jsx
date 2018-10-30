import React from 'react';
import $ from 'jquery';

import Listing from './Listing.jsx';
import sampleData from './sampledata';

class SimilarListings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: sampleData,
    };
  }

  componentDidMount() {
    const url = window.location.pathname;

    if (url !== '/') {
      $.ajax({
        type: 'GET',
        url: `/similar${url}`,
        success: (data) => {
          this.setState({
            listings: data,
          });
          console.log(this.state.listings);
        },
        error: () => {
          console.log('something went wrong!');
        },
      });
    }
  }

  render() {
    return (
      <div className="similar">
        {this.state.listings.map(listing => (
          <Listing listing={listing} />
        ))}
      </div>
    );
  }
}

export default SimilarListings;
