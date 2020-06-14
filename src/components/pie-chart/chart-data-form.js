import React from 'react';

import ErrorField from '../common/error-field';

const ChartDataForm = (props) => {
    const { handleSubmit, handleChange, handleBlur, touched, errors, isValid, dirty, values } = props;

    return (
        <form className="col-md-12" onSubmit={handleSubmit}>                    
            <div className="form-group col-md-12">
                <label className="col-md-5">
                    name
                    <input
                        className="form-control"
                        type="text"
                        placeholder="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ErrorField errors={errors} touched={touched} fieldName="name" />
                </label>

                <label className="col-md-5">
                    value
                    <input
                        className="form-control"
                        type="text"
                        placeholder="value"
                        name="value"
                        value={values.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ErrorField errors={errors} touched={touched} fieldName="value" />
                </label>

            </div>
            <div className="form-group col-md-12">                        
                <button
                    className="btn btn-primary add-filed ml-3"
                    disabled={!(isValid && dirty)}
                    style={{
                        cursor: isValid && dirty ? 'pointer' : 'no-drop'
                    }}>
                        Add Filed To Chart
                </button>
            </div>
        </form>
    );
};

export default ChartDataForm;