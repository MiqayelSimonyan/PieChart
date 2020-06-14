const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    };
  
    if (!values.value) {
        errors.value = 'Required';
    } else if (!+values.value || !/\d+/.test(values.value)) {
        errors.value = 'Must be number';
    }  else if (values.value.length > 20) {
        errors.value = 'Must be 20 characters or less';
    };
  
    return errors;
};

export default validate;