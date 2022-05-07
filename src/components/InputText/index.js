import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import StyledInput from "../StyledInput";

const InputText = (props) => {
  const {
    required, name, label, register, placeholder, defaultValue,
  } = props;

  return (
    <div>
      <Label {...{ label, required }} />
      <StyledInput {...{ placeholder, defaultValue }} {...register(name, { required })} />
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string
};

InputText.defaultProps = {
  label: undefined,
  name: undefined,
  required: false,
  register: () => ({}),
  placeholder: "",
  defaultValue: undefined,
};

export default InputText;