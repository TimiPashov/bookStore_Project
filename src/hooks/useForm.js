import { useState } from "react";

export function useForm(intialValues, onSubmitHandler) {
    const [formValues, setFormValues] = useState(intialValues);

    function onChangeHandler(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmit(e){
        e.preventDefault();
        onSubmitHandler(formValues)
    }

    return {
        formValues,
        onChangeHandler,
        onSubmit
    }
}