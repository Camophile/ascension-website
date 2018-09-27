
// Compile the template data into a function
jQuery(document).ready(function( $ ) {
  var templateScript;
  var layouts = $('#layouts');
  templateScript = Handlebars.templates.main({title: 'Ascension'});
  layouts.html(templateScript);
  // $.ajax({
  //   type: "GET",
  //   crossDomain: true,
  //   url: "/views/home/index.html",
  //   dataType: "html",
  //   success: function(body) {
  //     templateScript = Handlebars.templates.main({body});
  //     layouts.html(templateScript);
  //   },
  //   error: function (data) {
  //     console.error(data);
  //   }
  // });
});
