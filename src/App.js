import React from 'react';
import { ErrorComponent } from './components/Error';
import { ContentContext } from './context/contentContext';
import { ToyRobotContainer } from './pages/ToyRobot/ToyRobotContainer';

const App = ({ content }) => {
    return (
        <ContentContext.Provider value={content}>
            <ErrorComponent>
                <ToyRobotContainer />
            </ErrorComponent>
        </ContentContext.Provider>
    );
};

export { App };
