import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import validate from '../common/validate';

import { chartDataSelector } from '../../selectors/pie-chart';
import { createChart } from '../../ducks/pie-chart';

import ChartDataForm from './chart-data-form';

import '../../assets/styles/create-field.scss';

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
        onSubmit: values => {
            const { name, value } = values;

            dispatch(createChart({id, data: { id: uuidv4(), name, value } }));

            formik.resetForm({});
            toast.success('Field Added To Chart');
        }
    });

    const onClick = () => {
        setId(uuidv4());

        toast.success('New Chart Created');
    };

    const { handleSubmit, handleChange, handleBlur, values, isValid, touched, dirty, errors } = formik;

    return (
        <div className="container">
            <div className="row">
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
                <ChartDataForm
                    formSubmitValue="Add Filed To Chart"
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                    isValid={isValid}
                    dirty={dirty}
                    values={values}
                />
            </div>
        </div>
    );
};

export default CreateFiled;