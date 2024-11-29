// import { httpClient } from "@/services"

class FileApi {
  constructor() {
    // httpClient.createAuthRefreshInterceptor(() => {
    //   this.logOut()
    //   window.location.href = AUTH_PATH_NAME.DANG_NHAP
    // })
  }

  async getPresignedUrl(presignedUrl: string, file: File) {
    // eslint-disable-next-line no-useless-catch
    const response = await fetch(presignedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type, // e.g., 'image/png'
    },
    body: file,
  });

  if (response.ok) {
    console.log('File uploaded successfully');
  } else {
    console.error('File upload failed', response.statusText);
  }
  }
}

const fileApi = new FileApi()

export default fileApi
