import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://run.mocky.io/v3/",
});

type TResponse<Type> = {
  data: Type;
  success: boolean;
};

const onSuccess = (response: AxiosResponse): TResponse<any> => ({
  data: response.data,
  success: true,
});

const onError = () => ({
  data: null,
  success: false,
});

const get = (url: string, config?: AxiosRequestConfig) =>
  instance.get(url, config).then(onSuccess).catch(onError);

export { get };
export type { TResponse };
