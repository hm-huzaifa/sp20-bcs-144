let url = "https://jsonplaceholder.typicode.com/todos/";

let loadGET = () => {
  $.ajax({
    // url: "https://usman-cui-recipies.herokuapp.com/api/recipes/",
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
    // url: "https://usman-cui-recipies.herokuapp.com/api/recipes",
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
    // url: "https://usman-cui-recipies.herokuapp.com/api/recipes/",
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
