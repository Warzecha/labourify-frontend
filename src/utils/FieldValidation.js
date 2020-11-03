import React, {useCallback, useEffect, useState} from "react";

const noop = (_) => null;

const useFieldValidation = (initialValue, validate, onChange = noop) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (value !== initialValue) {
            const validationError = validate(value);
            setError(validationError);
        }
    }, [value, validate, initialValue]);

    const handleChange = useCallback((event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    }, [onChange]);

    const handleBlur = useCallback(() => {
        const validationError = validate(value);
        setError(validationError);
    }, [value, validate]);

    const runValidation = useCallback(() => {
        const validationError = validate(value);
        setError(validationError);
        return validationError;
    }, [value, validate]);

    const resetToInitialValue = useCallback(() => {
        setValue(initialValue);
    }, [initialValue]);

    const clearValue = useCallback(() => {
        setValue('');
    }, []);

    return {
        value,
        handleChange,
        error,
        handleBlur,
        resetToInitialValue,
        clearValue,
        validate: runValidation,
        setValue
    };

};

export default useFieldValidation;
