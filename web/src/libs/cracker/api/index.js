import pluralize from 'pluralize';

// local
import Client from './client';
import db, { models } from '../db';
import { forEach, find, pull, _ } from 'lodash';

// helper
const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

// init a new client
let client = Client();
var readVacatures = db.objects('Job');
var readMessages  = db.objects('Message');

// RESOURCES //
export const resources = (route, reset) => {
  let res = {}
  res[route] = {
    all: () => {
      const store = capitalize(pluralize(route, 1));
      const storeHandler = data => new Promise((resolve, reject) => {

        // loop over incoming data
        data[route].forEach((item) => {
          itemExists = null;

          if(route == 'jobs'){
            itemExists = _.find(readVacatures, { 'id': item.id });
            //_.pull(readVacatures, itemExists);
          }else if(route == 'messages'){
            itemExists = _.find(readMessages, { 'id': item.id });;
          }

          var model = new models[store](item);
          model.schema = models[store].schema;
          model.save(itemExists);
        });

        let entries = db.objects(store);
        resolve(entries);
      });
      return client.read(`${route}`).then(storeHandler);
    },
    favorites: () => {
      const store = capitalize(pluralize(route, 1));
      const storeHandler = data => new Promise((resolve, reject) => {

        // loop over incoming data
        data[route].forEach((item) => {
          itemExists = _.find(readVacatures, { 'id': item.id });
          if(itemExists.favourite == true){
            var model = new models[store](item);
            model.schema = models[store].schema;
            model.save(itemExists);
          }
        });

        let entries = db.objects(store);
        resolve(entries);
      });
      return client.read(`${route}`).then(storeHandler);
    },
    categories: (categoryID) => {
      const store = capitalize(pluralize(route, 1));
      const storeHandler = data => new Promise((resolve, reject) => {

        // loop over incoming data
        data[route].forEach((item) => {
          if(item.category_id == categoryID){
            itemExists = _.find(readVacatures, { 'id': item.id });

            var model = new models[store](item);
            model.schema = models[store].schema;
            model.save(itemExists);
          }
        });

        let entries = db.objects(store);
        resolve(entries);
      });
      return client.read(`${route}`).then(storeHandler);
    },
    new: () => {
      const store = capitalize(pluralize(route, 1));
      const storeHandler = data => new Promise((resolve, reject) => {

        // loop over incoming data
        data[route].forEach((item) => {
          var itemExists = null;

          if(route == 'jobs'){
            itemExists = _.find(readVacatures, { 'id': item.id });
          }else if(route == 'messages'){
            itemExists = _.find(readMessages, { 'id': item.id });
          }

          if(itemExists == undefined){
            var model = new models[store](item);
            model.schema = models[store].schema;
            model.save(itemExists);
          }
        });

        let entries = db.objects(store);
        resolve(entries);
      });
      return client.read(`${route}`).then(storeHandler);
    }
  }
  return res;
}

export default {
  ...resources('jobs', false),
  ...resources('events', false),
  ...resources('categories', false),
  ...resources('messages', true),
  ...resources('faqs', false),
  ...resources('units', false),
  ...resources('tenants', false),
  ...resources('topics', false),
  ...resources('users', false),
};
