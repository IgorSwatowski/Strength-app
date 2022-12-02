import { API_URL } from "./config";
interface UserData {
  email: string;
  password: string;
}

export async function addUser(userData: UserData) {
  const response = await fetch(`${API_URL}/api/user/signup`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
}