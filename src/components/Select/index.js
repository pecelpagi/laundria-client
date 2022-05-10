import Select from 'react-select';
import { COLOR_DATA } from '../../stitches.config';
import Label from "../InputText/Label";

export default (props) => {
    const {
        options, label, required, value, onChange,
    } = props;

    const found = options.find((x) => (String(x.value) === String(value)));

    return (
        <div>
            <Label {...{ label, required }} />
            <div className="relative">
                <Select
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary: COLOR_DATA.BACKGROUND_PRIMARY,
                            primary25: COLOR_DATA.BACKGROUND_TERTIARY
                        },
                    })}
                    onChange={onChange}
                    value={found}
                    options={options}
                />
            </div>
        </div>
    );
}