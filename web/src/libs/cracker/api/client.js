// client - modules
import Store        from './store';
import crudMethods  from './crud';
import Singleton    from './singleton';

// constants
// const CLIENT_NAMESPACE = Symbol.for("RSD-API-CLIENT");
const CLIENT_NAMESPACE = "RSD-API-CLIENT";

// API Client
const client = (token) => {

  let state = {
    token: token,
    scope: null,
    instanceTimeStamp: Date.now(),
  }

  // inner methods of client
  const clientMethods = (state) => ({

    scopeToDevice: (newScope) => {
      state.scope = newScope;
    },

    setDeviceToken: (newToken) => {
      state.token = newToken;
    }
  });

  // compose client
  return Singleton(CLIENT_NAMESPACE, Object.assign(
    ...state,
    crudMethods(state),
    clientMethods(state),
  ));

};

// expose
export default client;
