$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();

    var name = $("#username").val();
    var holiday = parseInt($("#holiday").val());
    var color = parseInt($("#color").val());
    var movieGenre = parseInt($("#movieGenre").val());
    var weather = parseInt($("#weather").val());
    var candy = parseInt($("#candy").val());

    var results = holiday + color + movieGenre + weather + candy;
    console.log(results);

    if (results >= 8 && results <= 12 ){
      $(".go").show();
      $(".card").slideUp();
      $("body").removeClass();
    $("body").addClass("go-class");
    } else if (results >= 12 && results <= 25){
      $(".python").show();
      $(".card").slideUp();
      $("body").removeClass();
    $("body").addClass("python-class");
    } else if (results >= 26){
      $(".rust").show();
      $(".card").slideUp();
      $("body").removeClass();
    $("body").addClass("rust-class");

    } else {
      $(".error").show();
      $(".card").slideUp();
      $("body").removeClass();
    $("body").addClass("error-class");
    }
    $(".text").text(name);


  });
});
