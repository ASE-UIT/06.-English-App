import { API_URL } from "@env";
let ACCESS_TOKEN= 'eyJraWQiOiJ0emNWdFRYeDYrazQ1TWhYNXV6NWhQMHVMV0sxVXBOakJVclh0Z2djT21RPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkOWRhYjVlYy1lMDAxLTcwNDEtZmYxZS01MzNmZDJiOTAwMWQiLCJjb2duaXRvOmdyb3VwcyI6WyJTVFVERU5UIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV9lZ3BZSjF0R1kiLCJjbGllbnRfaWQiOiI2Y2NqbTZ2ZTl0ZnExOGJoY2g5YnUwanU5aSIsIm9yaWdpbl9qdGkiOiIyZDk1NmQxYS04NzUxLTQ1OWYtODAxMS1iODk0NzczYzU1YzgiLCJldmVudF9pZCI6IjY5NGFiZTgxLTRiMDUtNDI2Ny05ZTA3LWVjMDQ2OWFiY2YwNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MzQyNTkwMDMsImV4cCI6MTczNDM0NTQwMywiaWF0IjoxNzM0MjU5MDAzLCJqdGkiOiIxY2I0ZGY2Yy1jOThjLTQ1N2ItOWRjYi0yNzcyOGUyNzhkZTgiLCJ1c2VybmFtZSI6Im1haWt1c29idSJ9.qL3X34ef8atByHf6XJ2JOHhwTqcbVQchWoeidMJac9uiUcl9G3LFw7ksfVEEZVA577BmU9d1peOfJG8xsGXTcwaCy-eejdtjSyYOvWaay9YKeQisbwOGlNFYEEAeW2BHsjTjWwKuKz-AmyYcC4XLXLciq57HIPy8nEgrKmll7scA_iC_hdv2PMEB1HsmPHJGLMGJSXpt7WQz3w2co8ot1P7n8gnDEEQRfDbIW3hsHMDBKRbnUHS7sH3Qv5fnvUbZPanXm5N1fMMIbqAIN1rgqan4bY0NpLvrqMcYNc5yQquGHuz_INmMwTZNZRCsYxfTmpkHkxZ-rHxtYPoPOn3FKg';
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
