import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";

class Http {

  baseUrl: string;
  accessToken: string | null = null;

  constructor() {
    this.baseUrl = API_URL;
    this.initializeToken();
  }

  private async initializeToken() {
    this.accessToken = await SecureStore.getItemAsync("accessToken");
  }

  private getURL(url: string) {

    return `${this.baseUrl}${url}`;
  }

  private async getHeaders() {
    if (!this.accessToken) {
      this.accessToken = await SecureStore.getItemAsync("accessToken");
    }
    return {
      accept: "*/*",
      Authorization: `Bearer ${this.accessToken}`,
    };
  }

  async get(endpoint: string) {
    const response = await fetch(this.getURL(endpoint), {
      method: "GET",
      headers: await this.getHeaders(),
    });
    return response.json();
  }

  async post(endpoint: string, data: object) {
    console.log(data);
    const response = await fetch(this.getURL(endpoint), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await this.getHeaders()),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async put(endpoint: string, data: object) {
    const response = await fetch(this.getURL(endpoint), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(await this.getHeaders()),
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async delete(endpoint: string) {
    const response = await fetch(this.getURL(endpoint), {
      method: "DELETE",
      headers: await this.getHeaders(),
    });
    return response.json();
  }

  async setAccessToken(token: string) {
    this.accessToken = token;
    await SecureStore.setItemAsync("accessToken", token);
  }
}

const http = new Http();
export default http;
