import { useForm } from "react-hook-form";
import InputText from '../../components/InputText';

export default () => {
    const { register } = useForm();

    return (
        <InputText
            name="filter_keyword"
            {...{ register }}
        />
    );
}