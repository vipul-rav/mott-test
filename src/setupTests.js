import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
    return { children };
};
const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
