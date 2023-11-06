import { FormEvent } from "react";
import { config } from "@/utils/config/config";
import { showToast } from "@/utils/hooks";

const serviceURI = config.baseURL + "/services";
async function createService(url: string, { arg }: { arg: any }) {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: arg,
      credentials: "include",
    });
    return await res.json();
  } catch (error) {
    showToast("error", "Sorry, an error occured. could not save form");
    console.log(error);
  }
}

export { serviceURI, createService };
