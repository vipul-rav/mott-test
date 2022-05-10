import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContentContext } from '../../../context/contentContext';
import { ToyRobotContainer } from '../ToyRobotContainer';

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

const setup = () => {
    const { container, getByText } = render(
        <ContentContext.Provider value={content}>
            <ToyRobotContainer />
        </ContentContext.Provider>
    );

    return {
        container,
        getByText
    };
};

describe('ToyRobotContainer Component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should render', () => {
        const { container } = setup();
        expect(container).toMatchSnapshot();
    });
    it('should render - with Position', () => {
        const { container } = setup();
        expect(container).toMatchSnapshot();
    });
    it('Report button Click', () => {
        jest.mock('formik', () => ({
            ...jest.requireActual('formik'),
            validate: jest.fn(),
            onSubmit: jest.fn(),
            values: {
                row: '1',
                column: '1',
                direction: 'NORTH'
            }
        }));
        const { props, getByText } = setup();
        const element = getByText('Place ROBOT');

        fireEvent.click(element);
    });

    it('Report button Click', () => {
        const { props, getByText } = setup();
        const element = getByText('Report');

        fireEvent.click(element);
    });
    it('Place Wall button Click - with Position', () => {
        const { props, getByText } = setup();
        const element = getByText('Place Wall');
        fireEvent.click(element);
    });
    it('Place Wall button Click - with No Position', () => {
        jest.mock('formik', () => ({
            ...jest.requireActual('formik'),
            validate: jest.fn(),
            onSubmit: jest.fn(),
            values: {
                row: '',
                column: '',
                direction: ''
            }
        }));
        const { props, getByText } = setup();
        const element = getByText('Place Wall');
        fireEvent.click(element);
    });
    it('Left button Click ', () => {
        const { props, getByText } = setup();
        const element = getByText('Left');
        fireEvent.click(element);
    });
    it('Move button Click ', () => {
        const { props, getByText } = setup();
        const element = getByText('Move');
        fireEvent.click(element);
    });
});
