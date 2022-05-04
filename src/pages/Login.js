import React from 'react';
import InputText from '../components/InputText';

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
                <InputText
                    label="Username"
                    changeEvent={(val) => { this.handleChangeState('username', val); }}
                    value={username}
                    required
                />
            </div>
        );
    }
}

export default Login;