import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type Config = {
  method?: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  headers?: Record<string, string>;
  baseURL?: string;
};

class API {
  private accessToken: string | null = null;

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  clearAccessToken() {
    this.accessToken = null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request = async (config: Config): Promise<any> => {
    const {
      method = "GET",
      url,
      params,
      headers,
      baseURL = import.meta.env.VITE_API_URL,
    } = config;

    const newHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const accessToken = window.localStorage.getItem("user");

    if (this.accessToken || accessToken) {
      newHeaders.Authorization = `Bearer ${
        this.accessToken || accessToken?.slice(1, -1)
      }`;
    }
    if (headers) {
      Object.assign(newHeaders, headers);
    }

    const requestConfig: AxiosRequestConfig = {
      method,
      url,
      baseURL,
      headers: newHeaders,
      timeout: 20000,
      timeoutErrorMessage: "Request timed out",
    };

    if (params) {
      if (typeof method === "string" && method.toLowerCase().trim() === "get") {
        requestConfig.params = params;
      } else {
        requestConfig.data = params;
      }
    }

    try {
      const response: AxiosResponse = await axios(requestConfig);

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    }
  };
}

export default new API();
