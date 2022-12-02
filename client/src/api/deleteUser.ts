import { API_URL } from "./config";

export type TUser = {
  email: string;
  password: string;
  _id: string;
};

export async function deleteUser(user: TUser) {
  await fetch(`${API_URL}/api/user/delete/${user._id}`, {
    method: "DELETE",
  });
}