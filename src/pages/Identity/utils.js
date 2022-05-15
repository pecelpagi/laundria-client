export const handleDeriveCompanyProfile = (props, state) => {
    if (JSON.stringify(state.readOnlyCompanyProfile) === JSON.stringify(props.companyProfile)) return null;

    return { formData: props.companyProfile, readOnlyCompanyProfile: props.companyProfile };
};
