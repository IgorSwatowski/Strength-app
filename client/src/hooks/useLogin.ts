import { useState } from "react";
import { useAuthContext, AuthContext } from "./useAuthContext";
import { User } from "./useAuthContext";

type LoginData = {
    email: string;
    password: string;
};

type LoginResponse = {
    user: User;
    token: string;
    error?: string;
};

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch }: AuthContext = useAuthContext();

    const login = async (email: string, password: string) => {
    setIsLoading(false);
    setError(null);

    const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    const json: LoginResponse = await response.json();

    if (!response.ok) {
        setIsLoading(false);
        setError(json.error || "An error occurred");
    } else {
        localStorage.setItem("userInfo", JSON.stringify(json));
        dispatch({ type: "LOGIN", payload: json });
        setIsLoading(false);
    }
};
    return { login, isLoading, error };
};