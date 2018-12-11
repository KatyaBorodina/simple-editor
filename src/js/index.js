import App from './app';
import simpleEditorApp from './reducer';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import * as React from 'react';

const logger = createLogger();
export const initialState = [];

let appState = initialState;
let savedState = localStorage.getItem('simpleEditorState');

if (savedState) {
    try {
        appState = JSON.parse(savedState);
    } catch (error) {
        console.warn('Be aware: app state saved in localStorage can`t be parsed correctly');
    }
}

export const store = createStore(simpleEditorApp, appState, applyMiddleware(logger));

store.subscribe(() => localStorage.setItem('simpleEditorState', JSON.stringify(store.getState())));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);