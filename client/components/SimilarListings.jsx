import React from 'react';
import $ from 'jquery';

import InfoPane from './InfoPane.jsx';
import Photos from './Photos.jsx';

class SimilarListings extends React.Component {
  constructor(props) {
    var url = window.location.pathname;

    super(props);

    this.state = {
      listings: null
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        this.setState({
          listings: data
        })
      },
      error: function() {
        console.log('something went wrong!');
      }
    });
  }

  render() {
    return (
      <div className = 'similar'>
        {this.state.listings.map((listing) => {
          <Listing listing={listing} />
        })}
      </div>
    );
  }
}