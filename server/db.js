'use strict';
var db = require('node-jt400').pool({
        sort: 'table',
        'sort table': 'ICEIS400/ISLAND'
    });
var sql = require('./sql/queries');
module.exports = {
  getCustomers: function(){
    return new Promise(resolve,reject){
          db.query(sql.getCustomers,[]).then(function(vidskiptavinir){
              resolve(vidskiptavinir);
          }).fail(reject);
      });
    }
  },
  getUsers: function(){
    return new Promise(resolve,reject){
      db.query(sql.getUsers,[]).then(function(notendur){
          resolve(notendur);
      }).fail(reject);
    }
  }
}
