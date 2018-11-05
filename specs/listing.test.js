import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Listing from '../client/components/Listing';
import sampleData from '../client/components/sampledata';

describe('Listing', () => {
  let props;
  let mountedListing;

  const listing = () => {
    if (!mountedListing) {
      mountedListing = mount(
        <Listing {...props} />
      );
    }
    return mountedListing;
  };

  beforeEach(() => {
    props = {
      transform: undefined,
      listing: sampleData[0],
    };
    mountedListing = undefined;
  });

  it('Should change the transform inline style when transform prop changes', () => {
    let styleStart = Object.apply({}, listing().find('.listing').prop('style'));
    listing().setProps({transform: 1});
    expect(listing().find('.listing').prop('style').transform).not.toEqual(styleStart.transform);
  });

  it('Should render a Photos and a InfoPane component', () => {
    expect(listing().find('Photos').length).toBe(1);
    expect(listing().find('InfoPane').length).toBe(1);
  });

  it('Should pass Photos and InfoPane a listing prop', () => {
    const photos = listing().find('Photos');
    const info = listing().find('InfoPane');
    expect(photos.props().listing).not.toBe(undefined);
    expect(info.props().listing).not.toBe(undefined);
  });
});
