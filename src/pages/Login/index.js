import React from 'react';
import Form from './Form';
import * as apiService from '../../data';
import { catchError, setToken } from '../../utils';

class Login extends React.Component {
    errorTimeOut = null;
    state = {
        errorFromAPI: '',
        isLoading: false,
    }

    handleSetLoading = (isLoading) => {
        this.setState({ isLoading });
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
            this.handleSetLoading(true);

            const res = await apiService.login(payload);

            setToken(res.data);

            window.location.href = '/dashboard';
        } catch (e) {
            this.handleSetLoading(false);
            this.handleSetError(e);
        }
    }

    render() {
        const { errorFromAPI, isLoading } = this.state;

        return (
            <Form {...{ errorFromAPI, isLoading }} onSubmit={this.handleSubmitData} />
        );
    }
}

export default Login;