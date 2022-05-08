import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { SelectComponent } from '../index';

const setup = (overridesProps) => {
    const props = {
        id: 'test',
        label: 'Test',
        handleChange: jest.fn(),
        value: '',
        ...overridesProps
    };

    const { container, getByTestId } = render(<SelectComponent {...props} />);

    return {
        props,
        container,
        getByTestId
    };
};

describe('Select Component', () => {
    it('should render - withOption', () => {
        const { container } = setup({
            options: [{ label: 'North', value: 'NORTH' }]
        });
        expect(container).toMatchSnapshot();
    });
    it('should render - without Options', () => {
        const { container } = setup();
        expect(container).toMatchSnapshot();
    });
});
