const validate = values => {
    const errors = {};
    const { name, value } = values;

    if (!name) {
        errors.name = 'Required';
    } else if (name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    };

    if (!value) {
        errors.value = 'Required';
    } else if (!+value || !/\d+/.test(value)) {
        errors.value = 'Must be number';
    } else if (value.length > 20) {
        errors.value = 'Must be 20 characters or less';
    };

    return errors;
};

export default validate;