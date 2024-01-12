import React, { useContext } from 'react';
import { handleDeriveLoggedInProfile } from './utils';
import * as apiService from "../../data";
import { ComponentContext } from "../../mainlayout/Context";
import { catchError } from '../../utils';
import { TOAST_TYPE } from '../../mainlayout/enums';
import Spinner from '../../components/Spinner';
import PageContext from './PageContext';

class ClassComponent extends React.Component {
    state = {
        formData: null,
        loggedInProfile: {},
        isSaving: false,
    }

    static getDerivedStateFromProps(props, state) {
        const derivedLoggedInProfile = handleDeriveLoggedInProfile(props, state);

        if (derivedLoggedInProfile) return derivedLoggedInProfile;

        return null;
    }

    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
    }

    handleAssignButtonsAndBreadcrumbs = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([
            {
                id: "1", title: "Simpan", clickEvent: () => { }, form: "my-profile-form",
                type: 'submit',
            }
        ]);

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

    handleChangeFormData = (key, value) => {
        const { formData } = this.state;

        const newFormData = {
            ...formData,
            [key]: value,
        }

        this.setState({ formData: newFormData });
    }

    handleSave = async (data) => {
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

    createContextValue = () => ({
        ...this.props,
        ...this.state,
        onChangeFormData: this.handleChangeFormData,
        onSave: this.handleSave,
    });

    render() {
        const { children } = this.props;
        const { isSaving, formData } = this.state;

        const contextValue = this.createContextValue();

        if (!formData) return null;

        return (
            <PageContext.Provider value={contextValue}>
                <div className="relative">
                    {children}
                    {isSaving && <Spinner />}
                </div>
            </PageContext.Provider>
        )
    }
}

const PageContextProvider = (props) => {
    const contextData = useContext(ComponentContext);

    return <ClassComponent {...props} {...contextData} />
};

export default PageContextProvider;