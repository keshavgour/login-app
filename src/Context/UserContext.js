import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const value = {
        username,
        setUsername,
        password,
        setPassword
    }

    return(

        <UserContext.Provider value={value}>{props.children}</UserContext.Provider>

    )
}