import React from "react";
import { Route } from "react-router-dom";
import Login from "../auth/Login";
import UserViews from "./UserViews";

const ApplicationView = () => {
    const localAllmanosUser = localStorage.getItem('allmanos_user')
    const allmanosUserObject = JSON.parse(localAllmanosUser)
    
    if (allmanosUserObject.user){
        return <UserViews />
    } else {
        <Route path="/login" element={<Login />} />
    }
}

export default ApplicationView
