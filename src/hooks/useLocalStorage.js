import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        const serializedPersistedState = localStorage.getItem(key);
        if (serializedPersistedState) {
            const persistedState = JSON.parse(serializedPersistedState);
            return persistedState;
        }
        return initialValue;
    });

    function setLocalStorageState(value) {
        setState(value);
        if(value){
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    return [state, setLocalStorageState];
}