import { API_URL } from "./config";

export async function addUser(firstName: string) {
    const response = await fetch(`${API_URL}/usersList`, { // Optimistic update, more performance
      method: "POST",
      body: JSON.stringify({
        firstName,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    return response.json();
}