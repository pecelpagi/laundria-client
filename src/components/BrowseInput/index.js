import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import StyledInput from "./StyledInput";

const BrowseInput = (props) => {
    const {
        label, required, value, ...rest
    } = props;

    return (
        <div>
            <Label {...{ label, required }} />
            <StyledInput {...{ required, value: value.text }} {...rest} />
        </div>
    );
}

BrowseInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    register: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        text: PropTypes.string,
    }),
    onBrowse: PropTypes.func.isRequired,
};

BrowseInput.defaultProps = {
    label: undefined,
    name: undefined,
    required: false,
    placeholder: "",
    value: {
        id: "",
        text: ""
    },
};

export default BrowseInput;