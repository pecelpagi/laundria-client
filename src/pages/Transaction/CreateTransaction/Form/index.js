import React from "react";
import FormContextProvider from "./FormContextProvider";
import InputForm from "./InputForm";

const Form = () => {
    return (
        <FormContextProvider>
            <InputForm />
        </FormContextProvider>
    )
}

export default Form;
