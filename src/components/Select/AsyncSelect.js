import React from "react";
import Select from 'react-select/async';

class AsyncSelect extends React.Component {
    state = {
        defaultOptions: [],
    }
    
    componentDidMount = () => { this.initialFetching(); }

    initialFetching = async () => {
        const { onFetch } = this.props;

        const defaultOptions = await onFetch();
        
        this.setState({ defaultOptions });
    }

    handleLoadOptions = async (inputValue, callback) => {
        const { onFetch } = this.props;

        const data = await onFetch(inputValue);

        callback(data);
    }

    render() {
        const { defaultOptions } = this.state;
        const { value } = this.props;

        const found = defaultOptions.find((x) => (String(x.value) === String(value)));

        return (
            <Select
                {...this.props}
                cacheOptions
                loadOptions={this.handleLoadOptions}
                value={found}
                {...{ defaultOptions }}
            />
        )
    }
}

export default React.memo(AsyncSelect);