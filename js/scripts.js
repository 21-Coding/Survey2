$(document).ready(function(event){
  $("form#form").submit(function(event){
    event.preventDefault();
    var name = $("#username").val();
    var gender = $("#gender").val();
    var holiday = parseInt($("#holiday").val());
    var color = parseInt($("#color").val());
    var movieGenre = parseInt($("#movieGenre").val());
    var weather = parseInt($("#weather").val());
    var candy = parseInt($("#candy").val());




    if (gender === "male" && gender === "female" && gender === "undecided"){
      $(".go").fadeIn();
      $(".hide-form").hide();
      $("body").removeClass();
    $("body").addClass("go-class");
    

    $(".text").text(name);


  });
});
