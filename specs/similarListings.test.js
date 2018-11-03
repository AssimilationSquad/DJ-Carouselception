import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SimilarListings from '../client/components/SimilarListings';
import sampleData from '../client/components/sampledata';

describe('SimilarListings', () => {
  let props;
  let mountedSimList;
  const simlist = () => {
    if (!mountedSimList) {
      mountedSimList = mount(
        <SimilarListings {...props} />
      );
    }
    return mountedSimList;
  };

  beforeEach(() => {
    props = {
      sampleData,
    };
    mountedSimList = undefined;
  });

  it('Always renders a div with class \'similar\'', () => {
    const divs = simlist().find('div');
    const simDiv = simlist().find('.similar');
    expect(simDiv.length).toBe(1);
    expect(divs.contains(simDiv.get(0))).toBe(true);
  });

  it('Renders listings', () => {
    expect(simlist().find('Listing').length).not.toBe(0);
  });

  it('Should pass each listing a listing prop', () => {
    let listings = simlist().find('Listing');
    listings.forEach((node) => {
      expect(node.props().listing).not.toBe(undefined);
    });
  });

  it('Should not have any visible buttons when there are fewer than 3 listings', () => {
    let buttons = simlist().find('button');
    let prev = buttons.find('#prev');
    let next = buttons.find('#next');
    expect(buttons.length).not.toBe(0);
    expect(next.get(0).props.style).toEqual({ display: 'none' });
    expect(prev.prop('style')).toEqual({ display: 'none' });
  });

  it('Should not have a visible back button when position is 0', () => {
    props.sampleData = props.sampleData.concat(props.sampleData);
    expect(simlist().find('#prev').prop('style')).toEqual({ display: 'none' });
  });

  it('Should not have a visible forward button when position is length - 3', () => {
    props.sampleData = props.sampleData.concat(props.sampleData);
    simlist().setState({ position: props.sampleData.length - 3 });
    expect(simlist().find('#next').prop('style')).toEqual({ display: 'none' });
  });
});
