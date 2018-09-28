import React from 'react';
import PropTypes from 'prop-types';
import {SelectInput, TextInput} from '../common';

// destruct all the prorps here in the function
const EmailForm = ({onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Login</h1>
            <TextInput
                name="email"
                label="Email"

                // value={course.title}
                onChange={onChange}
                error={errors.title}/>


            <TextInput
                name="password"
                label="Password"
                secureTextEntry={true}
                placeholder="password"
                onChange={onChange}
                error={errors.category} />


            <input
                type="submit"
                disabled={saving}
                value = {saving ? 'Inciando sesión...' : 'Iniciar sesión'}
                className="btn btn-primary"
                onClick={onSave}/>


        </form>
    );
};

//should have the same number of desturctured props
EmailForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default EmailForm;

