import React, { useContext } from 'react';
import { handleDeriveCompanyProfile } from './utils';
import * as apiService from "../../data";
import { ComponentContext } from "../../mainlayout/Context";
import { catchError } from '../../utils';
import { TOAST_TYPE } from '../../mainlayout/enums';
import Form from "./Form";

class Identity extends React.Component {
    state = {
        formData: null,
        readOnlyCompanyProfile: {},
    }

    static getDerivedStateFromProps(props, state) {
        const derivedCompanyProfile = handleDeriveCompanyProfile(props, state);

        if (derivedCompanyProfile) return derivedCompanyProfile;

        return null;
    }

    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            "Identitas Aplikasi",
        ]);
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleSaveData = async (data) => {
        try {
            const { onFetchCompanyProfile } = this.props;

            await apiService.updateCompanyProfile(data);

            onFetchCompanyProfile();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data identitas aplikasi tersimpan');
        } catch (e) {
            this.doShowingNotification(TOAST_TYPE.ERROR, catchError(e));
        }
    }

    render() {
        const { formData } = this.state;

        if (!formData) return null;

        return (
            <div className="bg-white rounded divide-y divide-solid">
                <div className="flex p-3 items-center">
                    <div className="text-base font-semibold w-full">Identitas Aplikasi</div>
                </div>
                <div className="p-3">
                    <Form onSave={this.handleSaveData} {...{ formData }} />
                </div>
            </div>
        )
    }
}

export default (props) => {
    const contextData = useContext(ComponentContext);

    return <Identity {...props} {...contextData} />
};