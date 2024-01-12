import Select from "../V2Select";

const limitData = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
];

 const SelectLimit = ({ onChange, value }) => {
    return (
        <Select
            {...{ value }}
            options={limitData}
            onChange={(val) => onChange(val)}
        />
    );
}

export default SelectLimit;