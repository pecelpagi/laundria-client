import React from 'react';
import FormContext from './FormContext';
import { useFormBusinessLogic } from './hooks';

const FormContextProvider = ({ children }) => {
    const {
        onSubmit,
        onChange,
        onMassChangeValue,
        errors,
        getValues,
        formData,
        setValue,
    } = useFormBusinessLogic();

    return (
        <FormContext.Provider
            value={{
                errors,
                onChange,
                onMassChangeValue,
                formData,
                setValue,
                getValues
            }}
        >
            <form className="flex flex-col gap-4 mt-1" id="create-transaction-form" {...{ onSubmit }}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default FormContextProvider;