import { API_URL } from "./config";

export type TUser = {
  email: string;
  password: string;
  _id: string;
};

export async function getUsers(): Promise<TUser[]> {
  const response = await fetch(`${API_URL}/dashboard/users`);
  return response.json();
}