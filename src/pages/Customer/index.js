import React from "react";
import BaseDataManagerPage from "../BaseDataManagerPage";
import Form from "./Form";
import { PAGE_TYPE } from "../BaseDataManagerPage/enums";
import * as pageUtility from "./utils";

const Customer = (props) => (
    <BaseDataManagerPage
        {...props}
        pageType={PAGE_TYPE.CUSTOMER}
        renderInputFormDialog={(formProps) => <Form {...formProps} />}
        {...{ pageUtility }}
    />
)

export default Customer;