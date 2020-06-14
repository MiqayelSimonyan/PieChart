import React from 'react';

import 'assets/styles/error-field.scss';

const ErrorField = (props) => {
    const { touched, errors, fieldName } = props;

    return (
        touched[fieldName] && errors[fieldName] ?
            <span className="col-md-12 error-field">
                {errors[fieldName]}
            </span>
        : null
    );
};

export default ErrorField;