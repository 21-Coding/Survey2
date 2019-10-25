$(document).ready(function(){
  $("form#form").submit(function(event) {
    event.preventDefault();

    var name = $("#username").val();
    var holiday = parseInt($("#holiday").val());
    var color = parseInt($("#color").val());
    var movieGenre = parseInt($("#movieGenre").val());
    var weather = parseInt($("#weather").val());
    var candy = parseInt($("#candy").val());

    var results = holiday + color + movieGenre + weather + candy;
    console.log(results);

    
  });
