import { API_URL } from "./config";

export async function addUser(firstName: string, lastName: string, age: string, email: string, password: string) {
    const response = await fetch(`${API_URL}/register`, { // Optimistic update, more performance
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        age,
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    return response.json();
}