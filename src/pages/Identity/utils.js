export const handleDeriveCompanyProfile = (props, state) => {
    if (JSON.stringify(state.companyProfile) === JSON.stringify(props.companyProfile)) return null;

    return { formData: props.companyProfile, companyProfile: props.companyProfile };
};
