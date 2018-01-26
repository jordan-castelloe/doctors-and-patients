"use strict";

angular.module("DoctorsAndPatients").controller("DoctorCtrl", function ($scope, DoctorFactory){
  DoctorFactory.getDoctors()
    .then((doctorData) => {
      $scope.doctorList = doctorData.data.doctors;
    });
});