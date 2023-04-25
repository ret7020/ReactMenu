import React, { useContext } from "react";
import userContext from "../Contexts/user";
import { NotFound } from "./NotFound";

export const Admin = () => {
    const { userInfo } = useContext(userContext);
    if (userInfo.role > 0) return (<h1>Админ-панель</h1>);
    else return <NotFound/>
}