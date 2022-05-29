import React from "react";
import { ComponentContext } from "../../mainlayout/Context";
import Summary from "./Summary";
import CompanyProfileSkeleton from "./CompanyProfileSkeleton";

const CompanyProfile = ({ companyProfile }) => {
    return (
        <div className="bg-white rounded divide-y divide-solid" id="company-profile-container">
            <div className="flex p-3 items-center" style={{ height: 60 }}>
                <h3 className="text-base font-semibold w-full">Dashboard</h3>
            </div>
            <div className="p-3">
                {!companyProfile && (<CompanyProfileSkeleton />)}
                {companyProfile && (
                    <React.Fragment>
                        <h4 className="text-base mb-2">{companyProfile.name}</h4>
                        <div className="text-sm">
                            <div className="mb-2">{companyProfile.addr}</div>
                            <div className="mb-2">{`Telepon : ${companyProfile.phone}`}</div>
                            <div>{`Email : ${companyProfile.email}`}</div>
                        </div>
                    </React.Fragment>
                )}
                <Summary />
            </div>
        </div>
    );
};

const withContext = props => (
    <ComponentContext.Consumer>
        {contextData => (
            <CompanyProfile {...props} {...contextData} />
        )}
    </ComponentContext.Consumer>
);

export default withContext;
