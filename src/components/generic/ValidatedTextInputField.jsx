import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const ValidatedTextInputField = (props) => {
    const {field} = props;
    return (
        <TextField
            value={field.value}
            error={!!field.errors}
            onBlur={field.handleBlur}
            helperText={field.errors || ' '}
            onChange={field.handleChange}
            {...props}
        />
    );
};

ValidatedTextInputField.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['outlined', 'filled']),
    field: PropTypes.object.isRequired,
    type: PropTypes.string,
};

export default ValidatedTextInputField;
