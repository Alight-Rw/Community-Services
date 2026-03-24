
import { AuthHeader, BASE_URL } from "../Utils/RequestUtils";

export const APIsRequestService = {
  WelcomeAPI: async () => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/api/welcome`, { method: 'GET', headers });
  },

  SignInAPI: async (data) => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/login`, { body: JSON.stringify(data), method: 'POST', headers })
  },

  SignUpAPI: async (data) => {

    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/client-signup`, { body: JSON.stringify(data), method: 'POST', headers })
  },
  GetServicesAPI: async () => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/service/services`, { method: 'GET', headers });
  },
  LogOutAPI: async () => {
    const headers = AuthHeader('json')
    return await fetch(`${BASE_URL}/auth/logout`, { method: 'POST', headers })

  },
 
  FietchcategoryAPI: async () => {

    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/category/categories`, {
      method: "GET",
      headers
    })
  },



  contactUsAPI: async (data) => {

    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/contact/message`, { body: JSON.stringify(data), method: 'POST', headers })
  },

  ForgotPasswordAPI: async (data) => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/forgot-password`, {
      body: JSON.stringify(data), method: 'POST', headers
    });
  },
  GetProfileAPI: async () => {
    const headers = AuthHeader('json');
    return await fetch(`${BASE_URL}/auth/profile`, { method: 'GET', headers })
  },
  GalleryAPI: async () => {
    const headers = AuthHeader("json");
    return fetch(`${BASE_URL}/gallery/galleries`, {
      method: "GET",
      headers,
    });
  },
  ChangePasswordAPI: async (token, data) => {
    const headers = AuthHeader('json');
    headers.Authorization = `Bearer ${token}`
    return await fetch(`${BASE_URL}/auth/change-password`, { body: JSON.stringify(data), method: 'PATCH', headers })
  },
  GetLastServicesAPI: async () => {
    const headers = AuthHeader('json');
    return fetch(`${BASE_URL}/service/last-services`, {
      method: 'GET',
      headers
    });
 }, 
 
  EditProfileAPI: async (data) => {
    const headers = AuthHeader("form-data");
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('location', data.location);
    data.avatar && formData.append('avatar', data.avatar);

    return fetch(`${BASE_URL}/auth/edit-profile`, {
      body: formData,
      method: "PATCH",
      headers,
    });
  },

  GetRequestedServicesAPI: async (status) => {
  const headers = AuthHeader('json');

  return await fetch(
    `${BASE_URL}/request-service/client-get-requested-services/${status}`,
    {
      method: "GET",
      headers,
    }
  );
},

  GetProviderRequestedServicesAPI: async (status) => {
  const headers = AuthHeader('json');

  return await fetch(
    `${BASE_URL}/request-service/provider-get-requested-services/${status}`,
    {
      method: "GET",
      headers,
    }
  );
},

 createServiceAPI: async (data) => {
  const formData = new FormData();

  formData.append("avatar", data.avatar); 
   formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", data.price);
  formData.append("category", data.category);
  formData.append("location",data.location)
  formData.append("timeFrom", data.timeFrom);
  formData.append("timeTo", data.timeTo);
  
  const headers = AuthHeader("form-data");
  return fetch(`${BASE_URL}/service/create`, {
    method: "POST",
    body: formData,
    headers,

  });

 },

 requestedServicesIP: async (data) => {
  const headers = AuthHeader('json');

  return await fetch(`${BASE_URL}/request-service`, {
    method: "POST",
    headers,
    body: JSON.stringify(data) 
  });
}

}

 
 

 