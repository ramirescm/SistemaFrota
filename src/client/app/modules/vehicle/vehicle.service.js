(function() {
    'use strict';

    angular
        .module('app')
        .service('VehicleService', VehicleService);

    //VehicleService.$inject = ['dependencies'];

    /* @ngInject */
    function VehicleService() {
      
      var service = {
        insert: insert,
        listOne: listOne,
        listAll: listAll,
        update: update,
        remove: remove
      };

      return service;

      function insert() {

      }

      function listOne() {

      }

      function listAll() {

      }

      function update() {

      }

      function remove() {

      }
    }
})();