import { useForm } from "react-hook-form";
import Select from "../Select";

const limitData = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
];

export default ({ onChange, value }) => {
    const { control } = useForm();

    return (
        <Select
            {...{ value, control }}
            name="limit_data"
            options={limitData}
            changeEvent={(val) => onChange(val)}
        />
    );
}