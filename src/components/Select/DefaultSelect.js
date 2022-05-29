import Select from 'react-select';

export default (props) => {
    const { value, options, fullWidth } = props;
    const found = options.find((x) => (String(x.value) === String(value)));

    let strLength = 10;

    if (found) strLength = found.label.length;

    return (
        <div style={fullWidth ? { width: '100%' } : { width: `${(8 * strLength) + 67}px` }}>
            <Select
                {...props}
                value={found}
            />
        </div>
    );
}