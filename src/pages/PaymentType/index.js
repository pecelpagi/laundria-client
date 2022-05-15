import React from "react";
import BaseDataManagerPage from "../BaseDataManagerPage";
import Form from "./Form";
import { PAGE_TYPE } from "../BaseDataManagerPage/enums";
import * as utilityService from "./utils";

const PaymentTypeContext = React.createContext();

export default (props) => (
    <BaseDataManagerPage
        {...props}
        pageType={PAGE_TYPE.PAYMENT_TYPE}
        pageContext={PaymentTypeContext}
        renderInputFormDialog={(formProps) => <Form {...formProps} />}
        {...{ utilityService }}
    />
)