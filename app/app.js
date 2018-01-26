'use strict';

angular.module("DoctorsAndPatients", ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when("/", {
        templateUrl: "app/partials/doctors.html",
        controller: "DoctorsCtrl"
      });
  });