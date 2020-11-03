import React from 'react';
import PropTypes from 'prop-types';

const CenteredColumnComponent = ({children}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{maxWidth: 800, flex: 1, flexDirection: 'column'}}>
                {children}
            </div>
        </div>
    );
};

CenteredColumnComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
};

export default CenteredColumnComponent;
