import { useContext } from "react";
import Select from "../Select";
import ComponentContext from "./ComponentContext";

const limitData = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
];

 const SelectLimit = () => {
    const { onSetLimit, limit } = useContext(ComponentContext);

    return (
        <Select
            {...{ value: limit }}
            options={limitData}
            onChange={(val) => onSetLimit(val)}
        />
    );
}

export default SelectLimit;