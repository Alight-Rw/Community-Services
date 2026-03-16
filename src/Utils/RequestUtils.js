import { decrypt, encrypt, generateDeviceId } from "./sharedUtils";

export const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const AuthHeader = (contentType) => {
    let device_id = localStorage.getItem('device');
    const access_token = localStorage.getItem('token');

    if (!device_id) {
        const deviceId = generateDeviceId();
        localStorage.setItem("device", encrypt(deviceId));
        device_id = deviceId;
    }

    if (contentType === 'form-data') {
        return { Authorization: `Bearer ${access_token}`, 'User-Device': decrypt(device_id) }
    }

    return { Authorization: `Bearer ${access_token}`, 'User-Device': decrypt(device_id), 'Content-Type': 'application/json' };
};
