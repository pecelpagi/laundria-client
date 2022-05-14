import React from "react";
import BaseDataManagerPage from "../BaseDataManagerPage";
import Form from "./Form";
import { PAGE_TYPE } from "../BaseDataManagerPage/enums";
import * as utilityService from "./utils";

const CustomerContext = React.createContext();

export default (props) => (
    <BaseDataManagerPage
        {...props}
        pageType={PAGE_TYPE.CUSTOMER}
        pageContext={CustomerContext}
        renderInputFormDialog={(formProps) => <Form {...formProps} />}
        {...{ utilityService }}
    />
)