/* eslint-disable @typescript-eslint/no-unused-vars */
import Axios, { AxiosError, AxiosResponse } from 'axios';
import ENV from 'react-native-config';

export enum AxiosStatus {
  Unauthorized = 401,
  Forbidden = 403,
}

const instance = () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'token here',
    'x-api-key': ENV.API_KEY,
  };

  const axiosInstance = Axios.create({
    baseURL: ENV.API,
    timeout: 35000,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (err: AxiosError) => {
      if (err.response?.status === AxiosStatus.Unauthorized) {
        // your mechanism to refreshToken
      } else if (err.response?.status === AxiosStatus.Forbidden) {
        // your mechanism to forbidden
      }

      return Promise.reject();
    }
  );

  return axiosInstance;
};

export default instance;
