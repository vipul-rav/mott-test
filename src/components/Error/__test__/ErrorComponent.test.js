import React from 'react';
import { render } from '@testing-library/react';
import { ErrorComponent } from '../../Error';

const setup = (overridesProps) => {
    const props = {
        ...overridesProps
    };

    const { container, getByText } = render(
        <ErrorComponent {...props}>
            <div>test</div>
        </ErrorComponent>
    );

    return {
        props,
        container,
        getByText
    };
};

describe('Error Component', () => {
    it('should render - hasError=true', () => {
        const overrideProps = {
            hasError: true,
            content: {
                errorHeader: 'Technical Error',
                errorText: 'There are some technical error',
                ExitText: 'Exit'
            }
        };
        const { container } = setup(overrideProps);
        expect(container).toMatchSnapshot();
    });
    it('should render - hasError=false', () => {
        const overrideProps = {
            hasError: false
        };
        const { container } = setup(overrideProps);
        expect(container).toMatchSnapshot();
    });
});
