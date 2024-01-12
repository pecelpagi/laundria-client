import React from "react";
import BaseDataManagerPage from "../BaseDataManagerPage";
import Form from "./Form";
import { PAGE_TYPE } from "../BaseDataManagerPage/enums";
import * as pageUtility from "./utils";

const LaundryPackage = (props) => (
    <BaseDataManagerPage
        {...props}
        pageType={PAGE_TYPE.LAUNDRY_PACKAGE}
        renderInputFormDialog={(formProps) => <Form {...formProps} />}
        {...{ pageUtility }}
    />
)

export default LaundryPackage;
