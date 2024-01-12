import React, { useContext } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PageContext from '../PageContext';
import { ORDER_STATUS } from '../../../../enums';

const processChangingValue = ({ key, value, onChangeFormData, setValue, clearErrors }) => {
    onChangeFormData(key, value);
    setValue(key, value);
    clearErrors(key);
}

export const useFormBusinessLogic = () => {
    const { readOnlyData, formData, onChangeFormData, onSaveData } = useContext(PageContext);
    const schema = yup.object({});

    const {
        handleSubmit,
        formState: { errors },
        setValue,
        clearErrors,
        getValues,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formData,
    });

    const isReadOnly = !(readOnlyData.order_status !== ORDER_STATUS.PICKED_UP && readOnlyData.order_status !== ORDER_STATUS.CANCELED);

    const handleChangeValue = (key, value) => {
        processChangingValue({ key, value, onChangeFormData, setValue, clearErrors })
    }

    const processSubmit = (submittedData) => { onSaveData(submittedData); }

    return {
        onSubmit: (e) => handleSubmit(processSubmit)(e),
        onChange: handleChangeValue,
        isReadOnly,
        errors,
        getValues,
        formData,
        setValue,
    }

}