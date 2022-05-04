import React from 'react';
import { 
    LockClosedIcon
} from '@radix-ui/react-icons';
import { styled } from '../stitches.config';
import InputText from '../components/InputText';
import InputPassword from '../components/InputPassword';
import StyledButton from '../components/StyledButton';
import { fonts } from '../core';

const Wrapper = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});

const Header = styled('div', {
    backgroundColor: '$backgroundPrimary',
    color: '$colorPrimary',
    fontFamily: fonts.brand,
});

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
            <Wrapper className="rounded bg-white w-full sm:w-96">
                <Header className="p-3 rounded-t">
                    <h4 className="font-medium mb-1">Selamat Datang di Laundria !</h4>
                    <span className="text-xs">Silahkan masukkan username dan password Anda</span>
                </Header>
                <div className="p-4">
                    <div className="mb-4">
                        <InputText
                            label="Username"
                            changeEvent={(val) => { this.handleChangeState('username', val); }}
                            value={username}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <InputPassword
                            label="Password"
                            changeEvent={(val) => { this.handleChangeState('passwd', val); }}
                            value={passwd}
                            required
                        />
                    </div>
                    <StyledButton className="w-full text-sm" variant="primary" type="button"><span className="flex items-center justify-center"><LockClosedIcon />&nbsp;Login</span></StyledButton>
                </div>
            </Wrapper>
        );
    }
}

export default Login;