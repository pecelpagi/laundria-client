import React from 'react';
import numeral from "numeral";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from "./Breadcrumb";
import { TOAST_TYPE } from './enums';
import HeaderButtons from './Layout.Buttons';

class Layout extends React.Component {
    state = {
        breadcrumbs: [],
        buttons: [],
    }

    componentDidMount = () => {
        numeral.register("locale", "id", {
            delimiters: {
                thousands: ".",
                decimal: ",",
            },
            abbreviations: {
                thousand: "k",
                million: "m",
                billion: "b",
                trillion: "t",
            },
            currency: {
                symbol: "Rp ",
            },
        });
        numeral.locale("id");
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
            <React.Fragment>
                <div className="flex items-center mb-4">
                    <div className="w-1/2">
                        {breadcrumbs.length > 0 ? <Breadcrumb data={breadcrumbs} /> : null}
                    </div>
                    <div className="w-1/2">
                        <HeaderButtons {...{ buttons }} />
                    </div>
                </div>
                {childrenWithProps}
                <ToastContainer theme="colored" />
            </React.Fragment>
        );
    }
}

export default Layout;
