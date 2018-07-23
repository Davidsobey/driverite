/*
 * API Config
 */


class API {
  // DOMAIN
  // http://127.0.0.1:8080
  // http://18.232.178.141
  DOMAIN = 'http://127.0.0.1:8080';
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
