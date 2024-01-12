import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PageContext from '../PageContext';
import schema from './validation-schema';

const processChangingValue = ({ key, value, onChangeFormData, setValue, clearErrors }) => {
    onChangeFormData({ [key]: value });
    setValue(key, value);
    clearErrors(key);
}

const processMassChangingValue = ({
    newFormData, onChangeFormData, setValue, clearErrors,
}) => {
    onChangeFormData(newFormData);
    Object.keys(newFormData).map((key) => {
        setValue(key, newFormData[key]);
        clearErrors(key);

        return key;
    });
};

export const useFormBusinessLogic = () => {
    const { formData, onChangeFormData, onSaveData } = useContext(PageContext);

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

    const handleChangeValue = (key, value) => {
        if (key === 'customer') {
            const newFormData = {
                customer: value,
                phone: value.phone,
                addr: value.addr,
            };

            processMassChangingValue({
                newFormData, onChangeFormData, setValue, clearErrors,
            });
        } else {
            processChangingValue({ key, value, onChangeFormData, setValue, clearErrors })
        }
    }

    const handleMassChangeValue = (newFormData) => {
        processMassChangingValue({
            newFormData, onChangeFormData, setValue, clearErrors,
        });
    }

    const processSubmit = (submittedData) => { onSaveData(submittedData); }

    return {
        onSubmit: (e) => handleSubmit(processSubmit)(e),
        onChange: handleChangeValue,
        onMassChangeValue: handleMassChangeValue,
        errors,
        getValues,
        formData,
        setValue,
    }
}