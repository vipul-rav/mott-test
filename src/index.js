import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CONTENT_URL } from './constants/urls';

const loadApp = async () => {
    const response = await fetch(CONTENT_URL);
    const result = await response.json();
    ReactDOM.render(<App content={result} />, document.getElementById('root'));
};

loadApp();
