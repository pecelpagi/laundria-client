import React from 'react';
import FormContext from './FormContext';
import { useFormBusinessLogic } from './hooks';

const FormContextProvider = ({ children }) => {
    const { onChange, onSubmit, errors, isReadOnly, formData, setValue, getValues } = useFormBusinessLogic();

    return (
        <FormContext.Provider
            value={{
                errors,
                isReadOnly,
                onChange,
                formData,
                setValue,
                getValues
            }}
        >
            <form className="flex flex-col gap-4 mt-1" id="update-transaction-form" {...{ onSubmit }}>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export default FormContextProvider;