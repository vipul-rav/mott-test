import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

const setup = (overridesProps) => {
    const props = {
        ...overridesProps
    };

    const wrapper = render(<App {...props} />);

    return {
        props,
        wrapper
    };
};

describe('App ', () => {
    it('should render', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
