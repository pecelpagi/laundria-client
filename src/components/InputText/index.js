import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import StyledInput from "../StyledInput";

class InputText extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    placeholder: PropTypes.string,
    changeEvent: PropTypes.func,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
  }

  static defaultProps = {
    label: undefined,
    value: "",
    name: undefined,
    placeholder: "",
    changeEvent: () => {},
    disabled: false,
    required: false,
  }

  changeHandler = (e) => {
    const { changeEvent } = this.props;

    changeEvent(e.target.value, e);
  }

  render() {
    const {
      value, placeholder, disabled,
      required, name, label,
    } = this.props;

    return (
      <div>
        <Label {...{ label, required }} />
        <StyledInput
          aria-label={name}
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={this.changeHandler}
          disabled={disabled}
          required={required}
          autoComplete="off"
        />
      </div>
    );
  }
}

export default InputText;