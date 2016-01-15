$(document).ready(function() {
  $("#vacationForm").submit(function(event) {
    var gender = $("select#gender").val();
    var age = $("select#age").val();
    var attitude = $("select#attitude").val();
    var budget = $("select#budget").val();
    var activities = $("select#activites").val();

// var form = ["gender", "age", "attitude", "budget", "activites"].submit(function(event) {}

    if (gender === 'female' && age === 'adult' && attitude === 'relax' && budget === 'under-$2,000' && activities === 'shopping') {
      $("#destination2").show()
      $("#destination2").hide()}

   if (gender === 'female' && age === 'youth' && attitude !== 'party' && budget === 'above-$2,000' && activities === 'shopping') {
      $("#destination1").show()
      $("#destination1").hide()}

   if (gender === 'male' && age !== 'adult' && attitude !== 'relax' && budget === 'under-$2,000' && activities === 'outdoor') {
      $("#destination2").show()
      $("#destination2").hide()}

   if (gender === 'female' && age === 'youth' && attitude === 'party' && budget === 'above-$2,000' && activities === 'outdoor') {
      $("#destination3").show()
      $("#destination3").hide()}

   if (gender === 'male' && age !== 'adult' && attitude === 'party' && budget === 'under-$2,000' && activities === 'outdoor') {
      $("#destination1").show()
      $("#destination1").hide()}

   else {
     $("#error").show();


   }

    event.preventDefault();

 });
});
