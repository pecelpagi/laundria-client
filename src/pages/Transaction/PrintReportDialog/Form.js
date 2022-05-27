import { useForm } from "react-hook-form";
import ErrorText from "../../../components/ErrorText";
import Button from '../../../components/StyledButton';
import InputText from '../../../components/InputText';
import { dateValidator } from "./utils";

export default ({ formData, onClose, onPrint }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => { onPrint(data) };

    return (
        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputText
                    label="Tanggal Awal"
                    name="startDate"
                    required
                    defaultValue={formData.startDate}
                    registerOptions={{
                        validate: { 
                            isDateValid: (v) => dateValidator(v) 
                        }
                    }}
                    {...{ register }}
                />
                {errors.startDate && errors.startDate.type === "required" && <ErrorText>Mohon untuk mengisi tanggal awal</ErrorText>}
                {errors.startDate && errors.startDate.type === "isDateValid" && <ErrorText>Format tanggal awal masih salah (YYYY-MM-DD)</ErrorText>}
            </div>
            <div>
                <InputText
                    label="Tanggal Akhir"
                    name="endDate"
                    required
                    defaultValue={formData.endDate}
                    registerOptions={{
                        validate: { 
                            isDateValid: (v) => dateValidator(v)
                        }
                    }}
                    {...{ register }}
                />
                {errors.endDate && errors.endDate.type === "required" && <ErrorText>Mohon untuk mengisi tanggal akhir</ErrorText>}
                {errors.endDate && errors.endDate.type === "isDateValid" && <ErrorText>Format tanggal akhir masih salah (YYYY-MM-DD)</ErrorText>}
            </div>
            <div className="flex flex-row text-sm mt-1 justify-end gap-3 w-full">
                <Button type="button" onClick={onClose}>Batal</Button>
                <Button type="submit" variant="primary">Cetak</Button>
            </div>
        </form>
    );
}