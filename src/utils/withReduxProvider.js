import {Provider} from 'react-redux';
import store from '../redux/store';
import React from 'react';


export const withReduxProvider = Component => props => {

    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};
