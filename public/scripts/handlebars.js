
// Compile the template data into a function
jQuery(document).ready(function( $ ) {

  var homeTemplate = Handlebars.templates.main({title: 'Ascension'});
  var aboutTemplate = Handlebars.templates.about({title: 'About Us'});
  $('#home').html(homeTemplate);
  $('#about-page').html(aboutTemplate);
});
