import axios from 'axios';
import API_ENV from "../config/api.config";

/**
 * Function login. Make login request to API
 * @param {String} username
 * @param {String} password
 * */
export async function login(username, password) {
    try {
        const response = await axios.post(`${API_ENV.apiUrl}/auth/login`, {
            username: username,
            password: password,
            expiresInMins: 0,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        return Promise.reject(e);
    }
}