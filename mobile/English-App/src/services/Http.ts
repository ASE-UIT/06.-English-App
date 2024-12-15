import { API_URL, ACCESS_TOKEN} from "@env";
class Http {

  baseUrl: string;
  constructor() {
    this.baseUrl = API_URL;
  }
  private getURL(url: string) {

    return `${this.baseUrl}${url}`;
  }
  async get(endpoint: string) {
    const response = await fetch(this.getURL(endpoint), {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.json();
  }
  async post(endpoint: string, data: object) {
    console.log(data);
    const response = await fetch(this.getURL(endpoint), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
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
        accept: "*/*",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  async delete(endpoint: string) {
    const response = await fetch(this.getURL(endpoint), {
      method: "DELETE",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.json();
  }
}

const http = new Http();
export default http;
