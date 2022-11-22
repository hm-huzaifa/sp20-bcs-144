let url = "https://jsonplaceholder.typicode.com/todos/";
// url: "https://usman-cui-recipies.herokuapp.com/api/recipes/",

let wesyBtn = () => {
  $("#myForm").on("submit", function (e) {
    e.prevntDefault();

    setTimeout(() => {
      console.log(e);

      if ($(e.input).val() != "") {
        console.log("input not empty");
      }
    }, 2000);

    return false;
  });
};

// let loadGET = () => {
//   $.ajax({
//     url: url,
//     method: "GET",
//     error: function (error) {
//       console.log("No Fu**s given...");
//       console.log(error);
//     },
//     success: function (response) {
//       console.log(response);
//     },
//   });

//   $("#myForm").on("submit", function (e) {
//     e.prevntDefault();
//     console.log(e);
//     if ($("#title").val() != "") {
//       console.log("input not empty");
//     }
//   });
// };

// let loadPOST = () => {
//   var title = $("#title").val();
//   var body = $("#body").val();

//   $.ajax({
//     url: url,
//     method: "POST",
//     data: { title, body },
//     success: function (response) {
//       console.log(response);
//     },
//   });
// };

// let loadDELETE = () => {
//   $.ajax({
//     url: url + "1",
//     method: "DELETE",
//     error: function (error) {
//       console.log("No Fu**s given...");
//       console.log(error);
//     },
//     success: function (response) {
//       console.log(response);
//     },
//   });
// };
