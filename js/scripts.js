$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    var person1Input = $("input#person1").val();

      $(".person1").text(person1Input);

      $("#story").show();

      event.preventDefault();

      $("input#UPPER").val();
      var element = document.getElementById(UPPER);
      alert(element);
    });
});
