import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch }: any = useAuthContext();

    const logout = async () => {
        localStorage.removeItem("userInfo")
        dispatch({ type: 'LOGOUT' })
    }
    return { logout }
}