import React from "react";
import PropTypes from "prop-types";
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons'
import Label from "./Label";
import StyledInput from "./StyledInput";

class InputPassword extends React.Component {
    state = {
        isShowingPassword: false,
    }

    handleTogglePassword = () => {
        const { isShowingPassword } = this.state;

        this.setState({ isShowingPassword: !isShowingPassword });
    }

    render() {
        const { isShowingPassword } = this.state;
        const {
            label, required, ...rest
        } = this.props;

        return (
            <div>
                <Label {...{ label, required }} />
                <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <button type="button" onClick={this.handleTogglePassword}>{isShowingPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}</button>
                    </span>
                    <StyledInput
                        type={isShowingPassword ? "text" : "password"}
                        css={{
                            paddingRight: '2.5rem',
                        }}
                        {...rest}
                    />
                </div>
            </div>
        );
    }
}

InputPassword.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
};

InputPassword.defaultProps = {
    label: undefined,
    name: undefined,
    required: false,
    placeholder: "",
    defaultValue: undefined,
};

export default InputPassword;
