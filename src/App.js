import React from 'react';
import { ErrorComponent } from './components/Error';
import { ContentContext } from './context/contentContext';
import { ToyRobotDashboard } from './pages/ToyRobot/ToyRobotDashboard';

const App = ({ content }) => {
    return (
        <ContentContext.Provider value={content}>
            <ErrorComponent>
                <ToyRobotDashboard content={content} />
            </ErrorComponent>
        </ContentContext.Provider>
    );
};

export { App };
