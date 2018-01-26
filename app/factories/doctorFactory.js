angular.module("DoctorsAndPatients").factory("DoctorsFactory", function ($q, $http) {

  let getDoctors = () => {
    return $q((resolve, reject) => {
      $http
        .get("https://doctors-and-patients-952f1.firebaseio.com/doctors.json")
        .then((doctorData) => {
          resolve(doctorData);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  return {getDoctors};
});