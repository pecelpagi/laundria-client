import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as apiService from "../../data";
import { catchError } from '../../utils';
import { TOAST_TYPE } from '../../mainlayout/enums';
import Spinner from '../../components/Spinner';
import PageContext from './PageContext';
import { fetchMyProfileStart } from '../../store/user/user.action';
import { selectMyProfileData } from '../../store/user/user.selector';

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
        const { loggedInProfile } = this.props;
    
        if (loggedInProfile !== prevProps.loggedInProfile) {
            this.handleInitFormData();
        }
    }

    handleInitFormData = () => {
        const { loggedInProfile } = this.props;

        this.setState({ formData: loggedInProfile });
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
        const { dispatch } = this.props;

        this.handleSetSaving(true);

        try {
            await apiService.updateMyProfile(data);

            dispatch(fetchMyProfileStart());

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
    const loggedInProfile = useSelector(selectMyProfileData);
    const dispatch = useDispatch();

    return <ClassComponent {...props} {...{ dispatch, loggedInProfile }} />
};

export default PageContextProvider;