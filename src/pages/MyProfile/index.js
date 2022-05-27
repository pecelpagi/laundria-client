import React, { useContext } from 'react';
import { handleDeriveLoggedInProfile } from './utils';
import * as apiService from "../../data";
import { ComponentContext } from "../../mainlayout/Context";
import { catchError } from '../../utils';
import { TOAST_TYPE } from '../../mainlayout/enums';
import Form from "./Form";
import Spinner from '../../components/Spinner';

class MyProfile extends React.Component {
    state = {
        formData: null,
        readOnlyLoggedInProfile: {},
        isSaving: false,
    }

    static getDerivedStateFromProps(props, state) {
        const derivedLoggedInProfile = handleDeriveLoggedInProfile(props, state);

        if (derivedLoggedInProfile) return derivedLoggedInProfile;

        return null;
    }

    componentDidMount = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            "Profil Saya",
        ]);
    }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
    }

    handleSetSaving = (isSaving) => {
        this.setState({ isSaving });
    }

    handleSaveData = async (data) => {
        this.handleSetSaving(true);

        try {
            const { onFetchLoggedInProfile } = this.props;

            await apiService.updateMyProfile(data);

            onFetchLoggedInProfile();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data profil tersimpan');
        } catch (e) {
            this.doShowingNotification(TOAST_TYPE.ERROR, catchError(e));
        } finally {
            this.handleSetSaving(false);
        }
    }

    render() {
        const { formData, isSaving } = this.state;

        return (
            <div className="bg-white rounded divide-y divide-solid relative">
                <div className="flex p-3 items-center">
                    <div className="text-base font-semibold w-full">Profil Saya</div>
                </div>
                <div className="p-3">
                    {!formData && <div className="relative h-32"><Spinner /></div>}
                    {formData && <Form onSave={this.handleSaveData} {...{ formData }} />}
                </div>
                {isSaving && <Spinner />}
            </div>
        )
    }
}

export default (props) => {
    const contextData = useContext(ComponentContext);

    return <MyProfile {...props} {...contextData} />
};