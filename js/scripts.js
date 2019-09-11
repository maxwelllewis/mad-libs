$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var person1Input = $("input#person1").val();

      $(".person1").text(person1Input);

      $("#story").show();

      event.preventDefault();


    });
    $("#upperForm").submit(function(event) {
      // var element = $("input#UPPER").val();
      debugger;
      var element = document.getElementById("UPPER").value;
      element = element.toUpperCase();
      alert(element);
      event.preventDefault();
    });

    


});
