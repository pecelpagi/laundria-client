import React from 'react';

import { ErrorImageOverlay } from './ErrorBoundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false,
        }
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasErrored: true,
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <h5 className="text-lg">Sorry this page is broken. 💔</h5>
                    <span className="text-base">Please kindly report to: <a className="underline" href="mailto:galuhrmdh@gmail.com">galuhrmdh@gmail.com</a></span>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;