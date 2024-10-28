import $ from "jquery";

$("body").append(`<p>Holberton Dashboard</p>`);
$("body").append(`<p>Dashboard data for the students</p>`);
$("document").ready(()=>{
    const button = $(<button>Click here to get started</button>)
    $('body').append(button)
})
$("body").append(`<p id='count'></p>`);
$("body").append(`<p>Copyright - Holberton School</p>`);


