angular.module("DoctorsAndPatients").controller("PatientCtrl", function ($scope, PatientFactory) {
  $scope.test = "The view loaded!";
  const doctorId = +$routeParams.doctorId;
  console.log("this should be the name of the doctor you clicked on", doctorId);

  PatientFactory.getPatients(doctorId)
    .then((patientData) => {
      $scope.patientList = patientData.data;
    });
});