$(document).ready(function() {

  $("#vacationForm").submit(function(event) {
    var gender = $("select#gender").val();
    var age = $("select#age").val();
    var attitude = $("select#attitude").val();
    var budget = $("select#budget").val();
    var activities = $("select#activities").val();


    if (gender === 'male' && age === 'youth' && attitude === 'relax' && budget === 'above-$2,000' && activities === 'outdoor') {
      $("#destination2").show()
    } else {
        $("#destination2").hide();
    }
    //
    //
    if (gender === 'male' && age === 'adult' && attitude === 'party' && budget === 'above-$2,000' && activities === 'outdoor') {
      $("#destination3").show()
    } else {
        $("#destination3").hide();
    }
    //
    if (gender === 'female' && age === 'adult' && attitude === 'both' && budget === 'above-$2,000' && activities === 'shopping') {
      $("#destination3").show()
    } else {
        $("#destination3").hide();
    }
    //
    if (gender === 'male' && age === 'adult' && attitude === 'both' && budget === 'under-$2,000' && activities === 'shopping') {
      $("#destination1").show()
    } else {
        $("#destination1").hide();
    }
    //
    if (gender === 'female' && age === 'adult' && attitude === 'relax' && budget === 'under-$2,000' && activities === 'outdoor') {
      $("#destination3").show()
    } else {
        $("#destination3").hide();
    }
    //


    event.preventDefault();

 });
});
