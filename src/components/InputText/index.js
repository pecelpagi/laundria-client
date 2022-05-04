import React from "react";
import PropTypes from "prop-types";

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

  renderLabel = () => {
    const { label, required } = this.props;

    if (!label) return null;

    return (
      <label className="block text-sm">
          {label}
          {" "}
          {required && <span className="text-red-500">*</span>}
      </label>
    );
  }

  render() {
    const {
      value, placeholder, disabled,
      required, name,
    } = this.props;

    return (
      <div>
        {this.renderLabel()}
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-md sm:text-sm focus:ring-1"
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