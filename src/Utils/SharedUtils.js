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

export const getRandomRating = () => {
  return (Math.random() * 1.5 + 3.5).toFixed(1);
};

export const getRandomReviews = () => {
  return Math.floor(Math.random() * 500) + 50;
};