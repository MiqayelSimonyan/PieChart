import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { updateChartField } from '../../ducks/pie-chart';

import Popup from '../common/popup';
import validate from '../common/validate';

import ChartDataForm from './chart-data-form';

const UpdateField = (props) => {
    const dispatch = useDispatch();
    const { fieldIndex, chartIndex } = props;
    const { id: fieldId, name, value } = props.field;

    const formik = useFormik({
        initialValues: { name, value },
        validate,
        onSubmit: values => {
            const { name, value } = values;

            dispatch(
                updateChartField({ 
                    fieldIndex,
                    chartIndex,
                    fieldId,
                    name,
                    value
                })
            );
            toast.success('Field Updated');
        }
    });

    const { handleSubmit, handleChange, handleBlur, values, isValid, touched, dirty, errors } = formik;

    return (
        <Popup value="Update Field">
            <ChartDataForm
                formSubmitValue="Update"
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                isValid={isValid}
                dirty={dirty}
                values={values}
            />
        </Popup>
    );
};

export default UpdateField;