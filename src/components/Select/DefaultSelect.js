import Select from 'react-select';

const DefaultSelect = (props) => {
    const { value, options } = props;
    const found = options.find((x) => (String(x.value) === String(value)));

    return (
        <Select
            {...props}
            placeholder="Cari ..."
            value={found}
        />
    );
}

export default DefaultSelect;