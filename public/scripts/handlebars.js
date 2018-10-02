/* // Expression helper
Handlebars.registerHelper('testHelper', function(property) {
  return 'this does something';
}); */

/* // Block helper
Handlebars.registerHelper('blockHelper', function(options) {
  return options.fn(this); // fn = everything that
                          // appears in opening and closing block
}); */


  function createHandlebarsTemplates(templatesObj) {
    const returnObj = {};
    for (const template in templatesObj) {
      returnObj[template] = Handlebars.templates[template](templatesObj[template]);
    }
    return returnObj;
  }

// Compile the template data into a function
jQuery(document).ready(function( $ ) {
  try {

        // Load pseudo-templates as templates before using them in pages below
        createHandlebarsTemplates({
          header: {},
          footer: {},
          carousel: {},     
          banner: {}
        });

        // Turns above templates into partials
        Handlebars.partials = Handlebars.templates;

        const templatesObj = createHandlebarsTemplates({ // must be JSON
          about: {
            "imgUrl": "public/img/section-banner/Vancouver_banner_2.jpg",
            "title": "Ascension | About Us"
          },
          home: { "title": "Ascension"},
          team: {
            "imgUrl": "public/img/section-banner/Vancouver_banner_2.jpg",
            "title": "Ascension | Team"
          }
        });

        // target DOM node to fill page template
        $('#home').html(templatesObj.home);
        $('#about-page').html(templatesObj.about);
        $('#team-page').html(templatesObj.team);
      // })

  } catch (e) {
    console.error(e.stack);
  }
});
