// Expression helper
Handlebars.registerHelper('testHelper', function(property) {
  return 'this does something';
});

// Block helper
Handlebars.registerHelper('blockHelper', function(options) {
  return options.fn(this); // fn = everything that
                          // appears in opening and closing block
});

Handlebars.registerPartial('header',
  $('#header-partial').html());

// Compile the template data into a function
jQuery(document).ready(function( $ ) {

  var homeTemplate = Handlebars.templates.main({title: 'Ascension'});
  var aboutTemplate = Handlebars.templates.about({title: 'About Us'});
  // var homeTemplate = $("hbs-template").html();
  // var compiledHomeTemplate = Handlebars.compile(homeTemplate);
  // $('#home').html(compiledHomeTemplate({title: 'Ascension'}));
  $('#home').html(homeTemplate);
  $('#about-page').html(aboutTemplate);
});
