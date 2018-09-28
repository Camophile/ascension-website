/* // Expression helper
Handlebars.registerHelper('testHelper', function(property) {
  return 'this does something';
}); */

/* // Block helper
Handlebars.registerHelper('blockHelper', function(options) {
  return options.fn(this); // fn = everything that
                          // appears in opening and closing block
}); */

/* // Partials
Handlebars.registerPartial('header',
  $('#header-partial').html());

  */

// Compile the template data into a function
jQuery(document).ready(function( $ ) {
  try {

    // $.ajax('../../views/partials/header.html')
      // .done(function(headerPartial) {
        // $("body").append(headerPartial);
        // Handlebars.registerPartial('header', $('#header-partial').html());
        var homeTemplate = Handlebars.templates.main({title: 'Ascension'});
        var aboutTemplate = Handlebars.templates.about({title: 'About Us'});
        var headerTemplate = Handlebars.templates.header();
        var footerTemplate = Handlebars.templates.footer();
        Handlebars.partials = Handlebars.templates;
        $('#home').html(homeTemplate);
        $('#header').html(headerTemplate);
        $('#footer').html(footerTemplate);
      // })

  //$('#about-page').html(aboutTemplate);
  } catch (e) {
    console.error(e.stack);
  }
});
