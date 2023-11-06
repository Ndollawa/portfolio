import { config } from "@/utils/config/config";

const loginURI = config.baseURL + "/auth/login";
const registerURI = config.baseURL + "/auth/register";
async function loginUser(url: string, { arg }: { arg: any }) {
  try {
    const res = await fetch(loginURI, {
      method: "POST",
      body: JSON.stringify(arg),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function registerUser(url: string, { arg }: { arg: any }) {
  try {
    const res = await fetch(registerURI, {
      method: "POST",
      body: JSON.stringify(arg),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export { loginURI, registerURI, loginUser, registerUser };
