import React from 'react';
import Form from './Form';
import * as apiService from '../../data';
import { catchError, setToken } from '../../utils';

class Login extends React.Component {
    errorTimeOut = null;
    state = {
        errorFromAPI: '',
    }

    handleSetError = (e = null) => {
        let errorFromAPI = '';
        
        if (e) errorFromAPI = catchError(e);

        this.setState({ errorFromAPI });

        if (this.errorTimeOut) clearTimeout(this.errorTimeOut);

        if (!errorFromAPI) return;

        this.errorTimeOut = setTimeout(() => {
            this.setState({ errorFromAPI: '' });
        }, 7000);
    }

    handleSubmitData = async (payload) => {
        try {
            const { history } = this.props;
            const res = await apiService.login(payload);

            setToken(res.data);

            history.push('/dashboard');
        } catch (e) {
            this.handleSetError(e);
        }
    }

    render() {
        const { errorFromAPI } = this.state;

        return (
            <Form {...{ errorFromAPI }} onSubmit={this.handleSubmitData} />
        );
    }
}

export default Login;