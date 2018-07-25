/*
 * API Config
 */


class API {
  // DOMAIN
  DOMAIN = 'https://crescenttesting.azurewebsites.net/api';
  BASE = '/ql/data/?info=';
  // Login
  LOGIN = '/login';
  USER = '/user';
  DELETE_ROTATION = '/rotation/delete';
  ROTATIONS_UPDATE = '/rotation/update'
  ROTATIONS_CREATE = '/rotation/create'
  DELETE_ROTATION = '/rotation/delete';
  MANAGER_CREATE = '/manager/create'

  ROTATIONS_ALL = `${this.BASE}{PostedRotations{ID ,ManID ,Role ,Area ,Team ,Description ,Start ,End}}`;
  getRotationsForManaget(id) {
    return `${this.BASE}{PostedRotationsForManager(id:"${id}"){ID ,ManID ,Role ,Area ,Team ,Description ,Start ,End}}`;
  }
}
export default API;
