const BASE_URI = 'https://rsd.noxqsapp.nl';
//https://rsd.noxqsapp.nl
//http://192.168.222.23:8080

const checkResponseStatus = (response) => {
  //console.log('logging response', response);
  if(!response.ok) {
    throw Error(response.statusText || response.status);
    return;
  };
  return response;
}

const defaultHeaders = (token) => {
  let headers = new Headers();
  // append default headers
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json; charset=utf-8');
  // return
  return headers;
}

const parseJSON = (response) => {
  //console.log('logging [response]', response);
  return response.json();
}

const request = (path, method='GET', extraParams) => {

  const route = `${BASE_URI}/${path}`;
  // console.log('[request][route]', route)
  // set options for request
  let options = {
    method:   method,
    headers:  defaultHeaders(),
  };

  let mergedParams = {...options, ...extraParams}

  // init request
  let request = new Request(route, mergedParams);
  // console.log('[request]', request)

  // return fetch {Promise}
  return fetch(request)
    .then(checkResponseStatus)
    .then(parseJSON);
}

const GET = (route, params) => {
  return request(route, 'GET', params);
}

const POST = (route, params) => {
  return request(route, 'POST', params);
}

const PATCH = (route, params) => {
  return request(route, 'PATCH', params);
}

const DELETE = (route, params) => {
  return request(route, 'DELETE', params);
}

export {
  GET,
  POST,
  PATCH,
  DELETE
}
