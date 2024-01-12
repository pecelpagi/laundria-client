import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation-schema';
import { useContext } from "react";
import PageContext from "./PageContext";

export const useBusinessLogic = () => {
    const { formData, onSave, onChangeFormData } = useContext(PageContext);
    const { handleSubmit, formState: { errors }, setValue, clearErrors } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formData,
    });
    const onSubmit = (data) => { onSave({ id: formData.id, ...data }); };

    const handleChangeValue = (key, value) => {
        onChangeFormData(key, value)
        setValue(key, value);
        clearErrors(key);
    }

    return {
        errors,
        formData,
        onChangeValue: handleChangeValue,
        onSubmit: (e) => handleSubmit(onSubmit)(e),
    }
}