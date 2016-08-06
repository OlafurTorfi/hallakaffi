'use strict';
var customers = [{LYSING:'testuser',
  STADA:1000,
NOTANDIID: 1
}],
  users = [{LYSING:'testuser',
  NOTANDIID: 1
  }];

module.exports = {
  getCustomers: function(){
    return new Promise(function(resolve,reject){
      resolve(customers);
    });
  },
  getUsers: function(){
    return new Promise(function(resolve,reject){
      resolve(users);
    });
  }
}
