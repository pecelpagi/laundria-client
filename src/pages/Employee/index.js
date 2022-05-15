import React from "react";
import BaseDataManagerPage from "../BaseDataManagerPage";
import Form from "./Form";
import { PAGE_TYPE } from "../BaseDataManagerPage/enums";
import * as utilityService from "./utils";

const EmployeeContext = React.createContext();

export default (props) => (
    <BaseDataManagerPage
        {...props}
        pageType={PAGE_TYPE.EMPLOYEE}
        pageContext={EmployeeContext}
        renderInputFormDialog={(formProps) => <Form {...formProps} />}
        {...{ utilityService }}
    />
)