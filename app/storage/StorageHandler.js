import decode from 'jwt-decode';

class StorageHandler {
  setID(id) {
    // Saves user id to localStorage
    localStorage.setItem('grm_id', id);
  }

  setToken(token) {
    // Saves user token to localStorage
    localStorage.setItem('grm_token', token);
  }

  setProperties(id, token) {
    // Saves user token to localStorage
    this.setID(id);
    this.setToken(token);
  }

  getID() {
    return localStorage.getItem('grm_id');
  }

  getToken() {
    return localStorage.getItem('grm_token');
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }
}

export default StorageHandler;
