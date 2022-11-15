import { API_URL } from "./config";

export type TUser = {
    firstName: string;
    _id: string;
}

export async function getUsers(): Promise<TUser[]> {
    const response = await fetch(`${API_URL}/usersList`);
    return response.json();
}