import React, { useContext } from 'react';
import { handleDeriveCompanyProfile } from './utils';
import * as apiService from "../../data";
import { ComponentContext } from "../../mainlayout/Context";
import { catchError } from '../../utils';
import { TOAST_TYPE } from '../../mainlayout/enums';
import Spinner from '../../components/Spinner';
import PageContext from './PageContext';

class ClassComponent extends React.Component {
    state = {
        formData: null,
        companyProfile: {},
        isSaving: false,
    }

    static getDerivedStateFromProps(props, state) {
        const derivedCompanyProfile = handleDeriveCompanyProfile(props, state);

        if (derivedCompanyProfile) return derivedCompanyProfile;

        return null;
    }

    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
    }

    handleAssignButtonsAndBreadcrumbs = () => {
        const { onAssignButtons, onAssignBreadcrumbs } = this.props;

        onAssignButtons([
            {
                id: "1", title: "Simpan", clickEvent: () => { }, form: "identity-form",
                type: 'submit',
            }
        ]);

        onAssignBreadcrumbs([
            {
                label: "App", link: "#",
            },
            "Identitas Aplikasi",
        ]);
    }

    handleSetSaving = (isSaving) => { this.setState({ isSaving }); }

    doShowingNotification = (toastType, message) => {
        const { onShowNotification } = this.props;
        onShowNotification(toastType, message);
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
            const { onFetchCompanyProfile } = this.props;

            await apiService.updateCompanyProfile(data);

            onFetchCompanyProfile();

            this.doShowingNotification(TOAST_TYPE.SUCCESS, 'Data identitas aplikasi tersimpan');
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