import React from "react";
import BaseDataManagerPage from "../BaseDataManagerPage";
import Form from "./Form";
import { PAGE_TYPE } from "../BaseDataManagerPage/enums";
import * as pageUtility from "./utils";

const PaymentType = (props) => (
    <BaseDataManagerPage
        {...props}
        pageType={PAGE_TYPE.PAYMENT_TYPE}
        renderInputFormDialog={(formProps) => <Form {...formProps} />}
        {...{ pageUtility }}
    />
)

export default PaymentType;
