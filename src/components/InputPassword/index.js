import React from "react";
import PropTypes from "prop-types";
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'
import Label from "../InputText/Label";
import StyledInput from "../StyledInput";

class InputPassword extends React.Component {
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
        changeEvent: () => { },
        disabled: false,
        required: false,
    }

    state = {
        isShowingPasswd: true,
    }

    changeHandler = (e) => {
        const { changeEvent } = this.props;

        changeEvent(e.target.value, e);
    }

    toggleShowingPasswd = () => {
        const { isShowingPasswd } = this.state;

        this.setState({ isShowingPasswd: !isShowingPasswd });
    }

    render() {
        const { isShowingPasswd } = this.state;
        const {
            value, placeholder, disabled,
            name, label, required
        } = this.props;

        return (
            <div>
                <Label {...{ label, required }} />
                <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button type="button" onClick={this.toggleShowingPasswd}>{isShowingPasswd ? <EyeOpenIcon /> : <EyeClosedIcon />}</button>
                    </span>
                    <StyledInput
                        aria-label={name}
                        type={isShowingPasswd ? "text" : "password"}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={this.changeHandler}
                        disabled={disabled}
                        required={required}
                        autoComplete="off"
                    />
                </div>
            </div>
        );
    }
}

export default InputPassword;
