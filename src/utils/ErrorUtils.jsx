import React from 'react';
import ErrorBoundary from '../components/generic/ErrorBoundary';
import ErrorAlert from '../components/generic/feedback/ErrorAlert';

export const withErrorBoundary = (WrappedComponent) => props => (
    <ErrorBoundary render={err => <ErrorAlert error={err}/>}>
        <WrappedComponent {...props} />
    </ErrorBoundary>);
