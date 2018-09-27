
// Compile the template data into a function
jQuery(document).ready(function( $ ) {
  var templateScript;
  var layouts = $('#layouts');
  $.ajax({
    type: "GET",
    crossDomain: true,
    url: "/views/home/index.html",
    dataType: "html",
    success: function(body) {
      templateScript = Handlebars.templates.main({body});
      layouts.html(templateScript);
      $('#countdown').countdown('2018/10/01', function(event) {
        $(this).html(event.strftime('%-d days <br /> %H:%M:%S'));
      });
    },
    error: function (data) {
      console.error(data);
    }
  });
});
