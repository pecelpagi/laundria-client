import Select from 'react-select';

export default (props) => {
    const { value, options } = props;
    const found = options.find((x) => (String(x.value) === String(value)));

    return (
        <Select
            {...props}
            value={found}
        />
    );
}