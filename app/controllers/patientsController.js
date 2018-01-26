angular.module("DoctorsAndPatients").controller("PatientCtrl", function ($scope, PatientFactory, $routeParams) {
  const doctorId = $routeParams.doctorId;
  PatientFactory.getPatients(doctorId)
    .then((patientData) => {
      $scope.patientList = patientData.data;
    });
});