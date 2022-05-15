import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import StyledInput from "../StyledInput";

const InputText = (props) => {
  const {
    required, name, label, register, placeholder, defaultValue, registerOptions, type
  } = props;

  return (
    <div>
      <Label {...{ label, required }} />
      <StyledInput {...{ placeholder, defaultValue, type }} {...register(name, { required, ...registerOptions })} />
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  registerOptions: PropTypes.shape({}),
};

InputText.defaultProps = {
  label: undefined,
  name: undefined,
  required: false,
  register: () => ({}),
  placeholder: "",
  defaultValue: undefined,
  registerOptions: {},
};

export default InputText;