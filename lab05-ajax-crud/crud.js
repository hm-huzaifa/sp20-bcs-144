let url = "https://jsonplaceholder.typicode.com/todos/";
// url: "https://usman-cui-recipies.herokuapp.com/api/recipes/",

let onSubmit = () => {
  $("#myForm").on("click", function (e) {
    e.prevntDefault();

    if ($("input").val() != "") {
      console.log("input is not empty");

      $.ajax({
        url: url,
        method: "POST",
        data: { email, password },
        success: function (res) {
          console.log(res);
        },
      });
    } else {
      console.log("input is empty");
    }
  });
};

let loadGET = () => {
  $.ajax({
    url: url,
    method: "GET",
    error: function (error) {
      console.log("No Fu**s given...");
      console.log(error);
    },
    success: function (response) {
      console.log(response);
    },
  });
};

let loadPOST = () => {
  var title = $("#title").val();
  var body = $("#body").val();

  $.ajax({
    url: url,
    method: "POST",
    data: { title, body },
    success: function (response) {
      console.log(response);
    },
  });
};

let loadDELETE = () => {
  $.ajax({
    url: url + "1",
    method: "DELETE",
    error: function (error) {
      console.log("No Fu**s given...");
      console.log(error);
    },
    success: function (response) {
      console.log(response);
    },
  });
};
