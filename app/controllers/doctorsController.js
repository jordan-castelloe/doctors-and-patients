"use strict";

angular.module("DoctorsAndPatients").controller("DoctorsCtrl", function ($scope, DoctorsFactory){
  DoctorsFactory.getDoctors()
    .then((doctorData) => {
      $scope.doctorList = doctorData.data;
    });
});