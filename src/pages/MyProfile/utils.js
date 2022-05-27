export const handleDeriveLoggedInProfile = (props, state) => {
    if (JSON.stringify(state.readOnlyLoggedInProfile) === JSON.stringify(props.loggedInProfile)) return null;

    return { formData: props.loggedInProfile, readOnlyLoggedInProfile: props.loggedInProfile };
};
