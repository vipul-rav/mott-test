import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContentContext } from '../../../context/contentContext';
import { ToyAction } from '../ToyAction';

const content = {
    directions: [
        { label: 'SELECT', value: '' },
        { label: 'NORTH', value: 'NORTH' },
        { label: 'EAST', value: 'EAST' },
        { label: 'SOUTH', value: 'SOUTH' },
        { label: 'WEST', value: 'WEST' }
    ],
    row: [
        { label: 'SELECT', value: '' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' }
    ],
    column: [
        { label: 'SELECT', value: '' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' }
    ]
};

const setup = (overridesProps) => {
    const props = {
        handleChange: jest.fn(),
        robotPosition: {
            row: '',
            column: '',
            direction: ''
        },
        robotPlaceClick: jest.fn(),
        reportClick: jest.fn(),
        placeWallClick: jest.fn(),
        moveClick: jest.fn(),
        directionChangeClick: jest.fn(),
        ...overridesProps
    };

    const { container, getByText } = render(
        <ContentContext.Provider value={content}>
            <ToyAction {...props} />
        </ContentContext.Provider>
    );

    return {
        props,
        container,
        getByText
    };
};

describe('ToyAction Component', () => {
    it('should render', () => {
        const { container } = setup();
        expect(container).toMatchSnapshot();
    });
    it('should render - with Position', () => {
        const { container } = setup({
            robotPosition: {
                row: '1',
                column: '1',
                direction: 'NORTH'
            }
        });
        expect(container).toMatchSnapshot();
    });
    it('Place Robot button Click', () => {
        const { props, getByText } = setup();
        const element = getByText('Place ROBOT');
        fireEvent.click(element);
        expect(props.robotPlaceClick).toBeCalled();
    });
    it('Left button Click', () => {
        const { props, getByText } = setup();
        const element = getByText('Left');
        fireEvent.click(element);
        expect(props.directionChangeClick).toBeCalled();
    });
    it('Right button Click', () => {
        const { props, getByText } = setup();
        const element = getByText('Right');
        fireEvent.click(element);
        expect(props.directionChangeClick).toBeCalled();
    });
});
