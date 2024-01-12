import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from "./Breadcrumb";
import { TOAST_TYPE } from './enums';
import HeaderButtons from './Layout.Buttons';
import Box from '../components/Box';

class Layout extends React.Component {
    state = {
        breadcrumbs: [],
        buttons: [],
    }

    handleAssignButtons = (buttons) => {
        this.setState({ buttons });
    }

    handleAssignBreadcrumbs = (breadcrumbs) => {
        this.setState({ breadcrumbs });
    }

    handleShowNotification = (toastType, text, extendOptions = {}) => {
        const options = {
            position: "top-right",
            autoClose: 5000,
            ...extendOptions,
        };

        switch (toastType) {
            case TOAST_TYPE.SUCCESS:
                toast.success(text, options);
                break;
            case TOAST_TYPE.ERROR:
                toast.error(text, options);
                break;
            default:
            // do nothing
        }
    }

    render() {
        const { breadcrumbs, buttons } = this.state;
        const { children } = this.props;

        const childrenWithProps = React.Children.map(
            children,
            child => React.cloneElement(child, {
                onAssignButtons: this.handleAssignButtons,
                onAssignBreadcrumbs: this.handleAssignBreadcrumbs,
                onShowNotification: this.handleShowNotification,
            }),
        );

        return (
            <div className="pb-4">
                {breadcrumbs.length > 0 && (
                    <Box
                        css={{
                            background: '$backgroundTertiary'
                        }}
                        className="flex flex-col md:flex-row items-center mb-4 p-3 pl-5 rounded"
                    >
                        <div className="w-full md:w-1/2">
                            <Breadcrumb data={breadcrumbs} />
                        </div>
                        <div className="w-full md:w-1/2">
                            <HeaderButtons {...{ buttons }} />
                        </div>
                    </Box>
                )}
                {childrenWithProps}
                <ToastContainer theme="colored" />
            </div>
        );
    }
}

export default Layout;
