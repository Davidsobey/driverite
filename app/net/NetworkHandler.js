import decode from 'jwt-decode';

import StorageHandler from '../storage/StorageHandler';
import API from '../config/api';

const storageHandler = new StorageHandler();
const api = new API();

class NetworkHandler {
  getUserInfo() {
    const userInfo = this.fetch(
      `${api.DOMAIN + api.USER}/${storageHandler.getID()}`,
      null,
    );
    return userInfo;
  }

  async getAllRotation() {
    const rotations = await this.fetch(api.DOMAIN + api.ROTATIONS_ALL, null);
    return rotations.data.PostedRotations;
  }

  async getAllRotationsForManager() {
    const rotations = await this.fetch(
      api.DOMAIN + api.getRotationsForManaget(storageHandler.getID()),
      null,
    );
    return rotations.data.PostedRotationsForManager;
  }

  async requestCreateRotationByID(data) {
    const url = `${api.DOMAIN + api.ROTATIONS_CREATE}`;

    const response = await this.post(url, data);
    return response;
  }

  async requestUpdateRotationByID(data) {
    const url = `${api.DOMAIN + api.ROTATIONS_UPDATE}`;

    const response = await this.post(url, data);
    return response;
  }

  async requestCreateManagerByID(data) {
    const url = `${api.DOMAIN + api.MANAGER_CREATE}`;

    const response = await this.post(url, data);
    return response;
  }

  async requestDeleteRotationByID(id) {
    const response = await this.fetch(
      `${api.DOMAIN + api.DELETE_ROTATION}/${id}`,
      null,
    );
    return response;
  }

  async post(url, data) {
    return this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => res);
  }

  login(username, password) {
    // Get a token from api server using the fetch api
    return this.fetch(`${this.domain}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => {
      storageHandler.setProperties(res.id, res.token);
      return Promise.resolve(res);
    });
  }

  async fetch(url, options) {
    // performs api calls sending the required authentication headers

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers.Authorization = `Bearer ${storageHandler.getToken()}`;
    }

    const res = await fetch(url, {
      headers,
      ...options,
    })
      .then(this.checkStatus)
      .then(response => response.json())
      .then(json => json)
      .catch(error => error);
    return res;
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = storageHandler.getToken(); // Getting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
export default NetworkHandler;
