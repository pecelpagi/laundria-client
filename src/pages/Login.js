import React from 'react';
import InputText from '../components/InputText';
import InputPassword from '../components/InputPassword';

class Login extends React.Component {
    state = {
        username: '',
        passwd: '',
    }

    handleChangeState = (key, val) => {
        this.setState({ [key]: val });
    }

    render() {
        const { username, passwd } = this.state;

        return (
            <div className="rounded bg-white w-96 p-4">
                <div className="mb-3">
                    <InputText
                        label="Username"
                        changeEvent={(val) => { this.handleChangeState('username', val); }}
                        value={username}
                        required
                    />
                </div>
                <InputPassword
                    label="Password"
                    changeEvent={(val) => { this.handleChangeState('passwd', val); }}
                    value={passwd}
                    required
                />
            </div>
        );
    }
}

export default Login;