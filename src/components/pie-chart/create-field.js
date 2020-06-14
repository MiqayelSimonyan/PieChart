import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import ErrorField from 'components/common/error-field';
import validate from 'components/common/validate';
import Popup from 'components/common/popup';

import { chartDataSelector } from 'selectors/pie-chart';

import { createChartData } from 'ducks/pie-chart';

import { Storage } from 'utils/storage';

import 'assets/styles/create-field.scss';

const CreateFiled = () => {
    const [id, setId] = useState(uuidv4());

    const dispatch = useDispatch();   
    const chartData = useSelector(chartDataSelector);

    const formik = useFormik({
        initialValues: {
            name: '',
            value: ''
        },
        validate,
        //  validateOnChange: true,
        //  validateOnBlur: true,
        onSubmit: values => {
            dispatch(createChartData({id, data: { id: uuidv4(), ...values} }));
            formik.resetForm({});

            toast.success('Field Added To Chart');
        }
    });

    const onClick = () => {
        setId(uuidv4());

        toast.success('New Chart Created');
        Storage.setToken('chartData', JSON.stringify(chartData));
    };

    const { handleSubmit, handleChange, handleBlur, values, isValid, touched, dirty, errors } = formik;

    return (
        <div className="container">
            <div className="row">
                <Popup>
                    open
                </Popup>
                <div className="form-group col-md-12 clearfix">
                    <button 
                        className="btn btn-primary create-chart float-right mt-5 mb-3 ml-3 mr-3"
                        disabled={!chartData.length}
                        onClick={onClick}
                        style={{ cursor: !chartData.length ? 'no-drop' : 'pointer' }}
                        >                          
                        Create New Chart
                    </button>
                </div>
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
            </div>
        </div>
    );
};

export default CreateFiled;