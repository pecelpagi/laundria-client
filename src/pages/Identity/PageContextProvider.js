import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as apiService from "../../data";
import { catchError } from '../../utils';
import { TOAST_TYPE } from '../../mainlayout/enums';
import Spinner from '../../components/Spinner';
import PageContext from './PageContext';
import { fetchCompanyProfileStart } from '../../store/user/user.action';
import { selectCompanyProfileData } from '../../store/user/user.selector';

class ClassComponent extends React.Component {
    state = {
        formData: null,
        isSaving: false,
    }

    componentDidMount = () => {
        this.handleAssignButtonsAndBreadcrumbs();
        this.handleInitFormData();
    }

    componentDidUpdate = (prevProps) => {
        const { companyProfile } = this.props;
    
        if (companyProfile !== prevProps.companyProfile) {
            this.handleInitFormData();
        }
    }

    handleInitFormData = () => {
        const { companyProfile } = this.props;

        this.setState({ formData: companyProfile });
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
        const { dispatch } = this.props;

        this.handleSetSaving(true);

        try {
            await apiService.updateCompanyProfile(data);

            dispatch(fetchCompanyProfileStart());

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
    const companyProfile = useSelector(selectCompanyProfileData);
    const dispatch = useDispatch();

    return <ClassComponent {...props} {...{ dispatch, companyProfile }} />
};

export default PageContextProvider;