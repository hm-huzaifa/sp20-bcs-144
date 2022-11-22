// ----- USING Callback -----
// function getCGPA(id, callback) {
//   setTimeout(() => {
//     console.log("Fetching CGPA of ", id);
//     callback();
//   }, 1000);
//   return 3.7;
// }

// let cb = () => {
//   console.log("CGPA = ", cgpa);
// };

// const cgpa = getCGPA("SP19 - BCS - 000", cb);

// ----- USING Promise -----

// const getCGPA = new Promise((resolve, reject) => {
//   resolve({ cgpa: 3.69 });
//   reject(new Error("CGPA not found"));
// });

// getCGPA
//   .then((result) => console.log(result.cgpa))
//   .catch((err) => console.log(err));

// ----- USING ASYNC-AWAIT -----
async function getCGPA(id) {
  console.log("Fetching CGPA of ", id);
  const gpa = await p;
  return gpa;
}

let p = new Promise((resolve, reject) => {
  resolve({ cgpa: 3.69 });
  reject(new Error("CGPA not found"));
});

const cgpa = getCGPA("SP19 - BCS - 000");
cgpa.then((data) => {
  console.log("CGPA: ", data);
});
