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

  $('#mailform').submit(function() {
    var mailnameInput = $('input#mailname').val();
    var mailaddressInput = $('input#mailaddress').val();

      $('.mailname').text(mailnameInput);
      $('.mailaddress').text(mailaddressInput);

      $('#receipt').show();

      var element = document.getElementById('mailaddress').value;
      alert(element);

      event.preventDefault();
    });

    $('#timeform').submit(function(event) {
      var realnameInput = $('input#realname').val();
      var realdateInput = $('input#realdate').val();
      var zoneInput = $('input#zone').val();

      $('.realname').text(realnameInput);
      $('.realdate').text(realdateInput);
      $('.zone').text(zoneInput);

      $('#schedule').show();

      alert("booking successful!");

      event.preventDefault();


    });

});
