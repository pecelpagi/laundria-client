export default (props) => {
    const { label, required } = props;

    if (!label) return null;

    return (
        <label className="block text-sm">
            {label}
            {" "}
            {required && <span className="text-red-500">*</span>}
        </label>
    );
}