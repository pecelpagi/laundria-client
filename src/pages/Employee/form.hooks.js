import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation-schema';

export const useBusinessLogic = ({ formDataProp, onHideFormDialog, onShowConfirmationDialog, onSave }) => {
    const [formData, setFormData] = useState(formDataProp);

    const { handleSubmit, formState: { errors }, setValue, clearErrors } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formData,
    });
    const onSubmit = () => { onSave(formData); };

    const handleShowDeleteConfirmation = () => {
        onHideFormDialog();
        onShowConfirmationDialog();
    }

    const handleChangeValue = (key, value) => {
        const newFormData = {
            ...formData,
            [key]: value,
        }

        setFormData(newFormData);
        setValue(key, value);
        clearErrors(key);
    }

    const hasErrors = (Object.keys(errors).length > 0);

    return {
        formData,
        errors,
        hasErrors,
        onSubmit: (e) => handleSubmit(onSubmit)(e),
        onChangeValue: handleChangeValue,
        onShowDeleteConfirmation: handleShowDeleteConfirmation,
    }
}