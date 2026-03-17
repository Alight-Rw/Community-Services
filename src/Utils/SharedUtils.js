export const encrypt = (data) => {
  try {
    return btoa(data);
  } catch (error) {
    window.location.replace("/");
    return JSON.stringify(error);
  }
};

export const decrypt = (data) => {
  try {
    return atob(data);
  } catch (error) {
    window.location.replace("/");
    return JSON.stringify(error);
  }
};

export const generateDeviceId = () => {
  const deviceId = Math.random().toString(36).substr(2, 16);
  localStorage.setItem("device", encrypt(deviceId));
  return deviceId;
};
