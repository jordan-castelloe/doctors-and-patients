angular.module("DoctorsAndPatients").factory("PatientFactory", function ($q, $http) {
  let getPatients= (doctorID) => {
    return $q((resolve, reject) => {
      $http
        .get(`https://doctors-and-patients-952f1.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${doctorID}"`)
        .then((patientData) => {
          resolve(patientData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  return {getPatients};
});