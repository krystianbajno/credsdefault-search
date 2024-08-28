import axios, { AxiosInstance } from 'axios';
import { Credential } from "@/app/interfaces/credential";

class CredentialsApi {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: '/api/dataset',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Cache-Control": "no-cache",
      },
    });
  }

  getInstance = (): AxiosInstance => {
    return this._instance;
  }
}

const API = new CredentialsApi();

export const Credentials = {
  get: async (): Promise<Credential[]> => { 
    try {
      const { data } = await API.getInstance().get('/');
      return data as Credential[];
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
}
