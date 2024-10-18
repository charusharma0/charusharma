import axios from 'axios';
import { getSession } from 'next-auth/react';

const ApiClient = () => {
  const baseURL = "https://api.jikan.moe/v4/anime";
  const instance = axios.create({
    baseURL,
  });
console.log("instance",instance)
  instance.interceptors.request.use(async (request) => {
    const session = await getSession();
    if (session) {
      request.headers["x-access-token"] = session?.user?.accessToken || "";
    }

    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      if (response.data.errorCode == 601) {
        return Promise.reject(response.data);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error?.response?.data);
    }
  );

  return instance;
};

// Export the function that creates the Axios instance
export default ApiClient;
