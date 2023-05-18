import axios from "../axios-client";

const adminUrl = "https://dummyjson.com";

export async function AdminService(method: any, url: string, data: any) {
  try {
    const response = await axios({
      method,
      url: `${adminUrl}/${url}`,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
}
