import $ from "jquery";
import { functions } from "lodash";

$("document").ready(() => {
  $("body").append(`<p>Holberton Dashboard</p>`);
  $("body").append(`<p>Dashboard data for the students</p>`);

  const button = $("<button>Click here to get started</button>");
  $("body").append(`<p id='count'></p>`);
  $("body").append(`<p>Copyright - Holberton School</p>`);

  $("body").append(button);

  var counter = 0;
  const updateCounter = () => {
    counter++;
    $("#count").html(counter + " clicks on the button");
  };

  // Attach the click event using jQuery
  button.on("click", updateCounter).bind(functions);
});
