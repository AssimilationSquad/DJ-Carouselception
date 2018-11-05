import React from 'react';
import $ from 'jquery';

import Listing from './Listing.jsx';

class SimilarListings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: this.props.sampleData,
      position: 0,
    };
  }

  componentDidMount() {
    const url = window.location.pathname;

    if (url !== '/') {
      $.ajax({
        type: 'GET',
        url: `/similar${url}`,
        success: (data) => {
          if (data.length > 0) {
            this.setState({
              listings: data,
              position: 0,
            });
          }
        },
        error: () => {
          console.log('something went wrong!');
        },
      });
    }
  }

  nextSlide() {
    this.setState({
      listings: this.state.listings,
      position: this.state.position + 1,
      transform: -100 * (this.state.position + 1),
    });
  }

  prevSlide() {
    this.setState({
      listings: this.state.listings,
      position: this.state.position - 1,
      transform: -100 * (this.state.position - 1),
    });
  }

  render() {
    return (
      <div className="similar">
        <h1>Similar listings</h1>
        <div className="carousel">
          {this.state.listings.map((listing, index) => (
            <Listing listing={listing} order={index} transform={this.state.transform} />
          ))}
        </div>
        <button id="prev" type="button" onClick={() => this.prevSlide()} style={{ display: this.state.position ? 'inline-block' : 'none' }}>&lt;</button>
        <button id="next" type="button" onClick={() => this.nextSlide()} style={{ display: (this.state.position > this.state.listings.length - 4) || (this.state.listings.length < 4) ? 'none' : 'inline-block' }}>&gt;</button>
      </div>
    );
  }
}

export default SimilarListings;
