import { useForm } from "react-hook-form";
import InputText from '../../components/InputText';

export default ({ onSearch }) => {
    const { register } = useForm();

    return (
        <InputText
            name="filter_keyword"
            registerOptions={{ onChange: (e) => { onSearch(e.target.value); } }}
            {...{ register }}
        />
    );
}