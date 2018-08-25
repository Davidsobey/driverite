import React from 'react';
import decode from 'jwt-decode';

import StorageHandler from '../storage/StorageHandler';
import { DOMAIN } from '../config/constants';

const storageHandler = new StorageHandler();

class AuthMiddleware extends React.Component {
  // Initializing important variables
  constructor() {
    super();
    this.domain = DOMAIN; // API server domain (TODO: need to move)
    this.fetch = this.fetch.bind(this); // React binding stuff
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(storageHandler.getToken());
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

  login(username, password) {
    // Get a token from api server using the fetch api
    return this.fetch(`${this.domain}/Auth`, {
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

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers.Authorization = `Bearer ${this.getToken()}`;
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(this.checkStatus)
      .then(response => response.json());
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

export default AuthMiddleware;
