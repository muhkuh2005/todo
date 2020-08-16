import React, {useEffect} from "react";

export const usePersistedState = (key: any, defaultValue: any = "") => {
    const storageItem = localStorage.getItem(key) || null;

    const [state, setState] = React.useState(
        storageItem ? JSON.parse(storageItem) : defaultValue
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}