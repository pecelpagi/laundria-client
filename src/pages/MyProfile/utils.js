export const handleDeriveLoggedInProfile = (props, state) => {
    if (JSON.stringify(state.loggedInProfile) === JSON.stringify(props.loggedInProfile)) return null;

    return { formData: props.loggedInProfile, loggedInProfile: props.loggedInProfile };
};
