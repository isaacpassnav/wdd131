const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
// check understanding ... Loops and iteration
// const minAge = 18;
// const days = 6;
// const limit = 30;
// let studentReport = [11, 42, 33, 64, 29, 37, 44];
// const agesReport = [16,33, 29, 15, 19, 40,21, 60, 31, 19, 18, 28, 45]
// // working wit loop for

// for (let i = 0; i < studentReport.length; i++) {
//     if(studentReport[i] < limit){
//         console.log(studentReport[i])
//     };
// };
// //working with while 
// const i = 0;
// while ( i < studentReport) {
//     if(studentReport[1] < limit){
//         console.log(studentReport[i]);
//     }
//     i++
// };
// // forEach loop
// agesReport.forEach(function(item) {
//    if(item < minAge){
//     console.log("alumnos con edad menor a 18 años:" + item)
//    }
// });
