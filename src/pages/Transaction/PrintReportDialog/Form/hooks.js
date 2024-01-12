import { useContext } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DialogContext from '../DialogContext';

const processChangingValue = ({ key, value, onChangeFormData, setValue, clearErrors }) => {
    onChangeFormData(key, value);
    setValue(key, value);
    clearErrors(key);
}

export const useFormBusinessLogic = () => {
    const { formData, onChangeFormData, onStartPrinting } = useContext(DialogContext);
    const schema = yup.object({});

    const {
        handleSubmit,
        setValue,
        clearErrors,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formData,
    });

    const handleChangeValue = (key, value) => {
        processChangingValue({ key, value, onChangeFormData, setValue, clearErrors })
    }

    const processSubmit = (submittedData) => { onStartPrinting(submittedData); }

    return {
        onSubmit: (e) => handleSubmit(processSubmit)(e),
        onChange: handleChangeValue,
        formData,
        setValue,
    }
}