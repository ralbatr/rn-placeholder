import React from 'react';
import { shallow } from 'enzyme';
import MultiWords from './../multiWords';
import Line from './../../line/line';

const TEXT_SIZE = 12;
const words = [
  {
    width: '20%',
    color: 'red',
  },
  {
    width: '10%',
    color: 'blue',
  },
  {
    width: '30%',
    color: 'green',
  },
];

/** @test {MultiWords#render} */
describe('MultiWords#render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MultiWords words={words} textSize={TEXT_SIZE} />);
  });

  it('shouldnt have any line', () => {
    wrapper = shallow(<MultiWords />);
    expect(wrapper.find(Line).length).toEqual(0);
  });

  it('should have 3 lines', () => {
    expect(wrapper.find(Line).length).toEqual(3);
  });

  words.forEach((word, index) => {
    it(`should have the ${index} word with props textSize equals to ${TEXT_SIZE}`, () => {
      expect(
        wrapper
          .find(Line)
          .at(index)
          .prop('textSize'),
      ).toEqual(TEXT_SIZE);
    });

    it(`should have the ${index} word with props colors equals to ${word.color}`, () => {
      expect(
        wrapper
          .find(Line)
          .at(index)
          .prop('color'),
      ).toEqual(word.color);
    });

    it(`should have the ${index} word with props width equals to ${word.width}`, () => {
      expect(
        wrapper
          .find(Line)
          .at(index)
          .prop('width'),
      ).toEqual(word.width);
    });
  });
});