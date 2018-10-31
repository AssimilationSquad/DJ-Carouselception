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

  getOrder(index) {
    const currentPos = this.state.position;
    return { order: index - this.state.position };
  }

  nextSlide() {
    this.setState({
      listings: this.state.listings,
      position: this.state.position + 1,
      transform: `translateX(${-34*(this.state.position+1)}vw)`,
    });
  }

  prevSlide() {
    this.setState({
      listings: this.state.listings,
      position: this.state.position -1,
      transform: `translateX(${-34*(this.state.position-1)}vw)`,
    });
  }

  render() {
    return (
      <div className="similar">
        <h1>Similar listings</h1>
        <div className="carousel">
          {this.state.listings.map((listing, index) => (
            <Listing listing={listing} key={index} style-order={() => this.getOrder(index)} style-trans={this.state.transform} />
          ))}
        </div>
        <button type="button" onClick={() => this.prevSlide()} style={{ display: this.state.position ? 'inline-block' : 'none' }}>Prev</button>
        <button type="button" onClick={() => this.nextSlide()} style={{ display: this.state.position + 3 - this.state.listings.length ? 'inline-block' : 'none' }}>Next</button>
      </div>
    );
  }
}

export default SimilarListings;
