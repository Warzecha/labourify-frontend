import React from 'react';
import PropTypes from 'prop-types';

const FormActionsContainer = ({children}) => {
    return (
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', marginTop: 30}}>
            {children}
        </div>
    );
};

FormActionsContainer.propTypes = {};

export default FormActionsContainer;
