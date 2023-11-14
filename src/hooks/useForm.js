import { useState } from "react";

export function useForm(intialValues) {
    const [formValues, setFormValues] = useState(intialValues);

    function onChangeHandler(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    return {
        formValues,
        onChangeHandler
    }
}