import { API_URL } from "./config";

export type TUser = {
    firstName: string;
    lastName: string,
    email: string,
    password: string,
    age: string,
    _id: string;
}

export async function getUsers(): Promise<TUser[]> {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
}