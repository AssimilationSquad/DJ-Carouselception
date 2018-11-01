import React from 'react';
import $ from 'jquery';

import Listing from './Listing.jsx';
import sampleData from './sampledata';

class SimilarListings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: sampleData,
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
          this.setState({
            listings: data,
            position: 0,
          });
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
      transform: -100*(this.state.position+1),
    });
  }

  prevSlide() {
    this.setState({
      listings: this.state.listings,
      position: this.state.position -1,
      transform: -100*(this.state.position-1),
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
        <button id="next" type="button" onClick={() => this.nextSlide()} style={{ display: (this.state.position + 3 - this.state.listings.length) != (this.state.listings.length < 4) ? 'inline-block' : 'none' }}>&gt;</button>
      </div>
    );
  }
}

export default SimilarListings;
