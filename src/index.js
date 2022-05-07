import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CONTENT_URL } from './constants/urls';

fetch(CONTENT_URL)
    .then((response) => response.json())
    .then((result) => ReactDOM.render(<App content={result} />, document.getElementById('root')));
