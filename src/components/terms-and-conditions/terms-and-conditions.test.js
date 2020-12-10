import React from 'react';
import { shallow } from '../../enzyme';

import TermsAndConditions from './index';

describe('Terms And Conditions render test', () => {
    it('renders terms list', () => {
        const wrapper = shallow(<TermsAndConditions />);
        expect(wrapper.find('ul li.list-disc')).toBeDefined();
        expect(wrapper.find('ul li')).toHaveLength(6);
      });
});