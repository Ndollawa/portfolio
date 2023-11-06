import { config } from "@/utils/config/config";

const categoryURI = config.baseURL + "/categories";
async function createCategory(url: string, { arg }: { arg: any }) {
  try {
    const res = await fetch(categoryURI, {
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

export { categoryURI, createCategory };
