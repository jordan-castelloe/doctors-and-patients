// angular.module("DoctorsAndPatients").factory("PatientsFactory", function ($q, $http) {

//   let getPatients= () => {
//     return $q((resolve, reject) => {
//       $http
//         .get(("https://doctors-and-patients-952f1.firebaseio.com/patients.json"))
//         .then((patientData) => {
//           resolve(patientData);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   };
//   return {getPatients};
// });