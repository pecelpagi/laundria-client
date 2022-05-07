import React from "react";
import PropTypes from "prop-types";
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'
import Label from "../InputText/Label";
import StyledInput from "../StyledInput";

class InputPassword extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        name: PropTypes.string,
        required: PropTypes.bool,
        register: PropTypes.func,
        placeholder: PropTypes.string,
        defaultValue: PropTypes.string,
    }

    static defaultProps = {
        label: undefined,
        name: undefined,
        required: false,
        register: () => ({}),
        placeholder: "",
        defaultValue: undefined,
    }

    state = {
        isShowingPasswd: false,
    }

    toggleShowingPasswd = () => {
        const { isShowingPasswd } = this.state;

        this.setState({ isShowingPasswd: !isShowingPasswd });
    }

    render() {
        const { isShowingPasswd } = this.state;
        const {
            name, label, required, register, placeholder, defaultValue
        } = this.props;

        return (
            <div>
                <Label {...{ label, required }} />
                <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button type="button" onClick={this.toggleShowingPasswd}>{isShowingPasswd ? <EyeClosedIcon /> : <EyeOpenIcon />}</button>
                    </span>
                    <StyledInput
                        {...{ placeholder, defaultValue }} 
                        type={isShowingPasswd ? "text" : "password"}
                        {...register(name, { required })}
                    />
                </div>
            </div>
        );
    }
}

export default InputPassword;
