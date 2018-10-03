/* // Expression helper
Handlebars.registerHelper('testHelper', function(property) {
  return 'this does something';
}); */

/* // Block helper
Handlebars.registerHelper('blockHelper', function(options) {
  return options.fn(this); // fn = everything that
                          // appears in opening and closing block
}); */


  function callHandlebarsTemplates(templatesObj) {
    const returnObj = {};
    for (const template in templatesObj) {
      returnObj[template] = Handlebars.templates[template](templatesObj[template]);
    }
    return returnObj;
  }

jQuery(document).ready(function( $ ) {
  try {

    // // load partials object from Handlebars Templates
    Handlebars.partials = callHandlebarsTemplates({
      header: {},
      footer: {},
      banner: {},
      carousel: {
        "slide": [
          {
            "imgUrl": "public/img/intro-carousel/Vancouver_banner_2.jpg",
            "headText": "We are professional",
            "paragText": "Ascension works with managers...",
            "btnText": "Work with us"
          },
          {
            "imgUrl": "public/img/intro-carousel/Toronto_banner_2.jpg",
            "headText": "We are stylin'",
            "paragText": "Give us your time",
            "btnText": "Ride with us"
          },
          {
            "imgUrl": "public/img/intro-carousel/Berlin_banner.jpg",
            "headText": "We are Ascension",
            "paragText": "Your portal between setting your goals and achieving them",
            "btnText": "Rise with us"
          }
        ]
      }
    });

    //Load views templates
    const templatesObj = callHandlebarsTemplates({
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

  } catch (e) {
    console.error(e.message, '\n', e.stack);
  }
});
