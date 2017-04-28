import * as http  from './http';
import {isNull} from 'lodash';


const composePath = (scope, resource) => {
  return `${scope}/${resource}`;
}

export default (state) => ({

  // additional routes

  registerDevice: (params) => {
    return http.POST('auth/login', params)
  },


  // crud methods
  create: (key, data) => {

    const path   = composePath(state.scope, key);
    const params = { body: JSON.stringify(data) };

    return http.POST(path, params);
  },

  read: (key, options={})   => {
    const path = options.path || key; // TODO
    return http.GET(path);
  },

  update: (key, id, data)   => {
    const path   = composePath(state.scope, key) + `/${id}`;
    const params = { body: JSON.stringify(data) };
    return http.PATCH(path, params);

  },
  delete: (key, id)   => {
    const path = composePath(state.scope, key) + `/${id}`;
    return http.DELETE(path);
  },
})
