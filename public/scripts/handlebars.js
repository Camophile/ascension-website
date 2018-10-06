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

    // load partials object from Handlebars Templates
    const partialsObj = callHandlebarsTemplates({
      header: {},
      footer: {},
      banner: {},
      carousel: {
        "slide": [
          {
            "imgUrl": "public/img/intro-carousel/airplane_landing.jpg",
            "headText": "<em>is Trust</em>",
            "paragText": "We've empowered 100's of investors attain their financial goals",
            "btnText": "Learn more"
          },
          {
            "imgUrl": "public/img/intro-carousel/sunset_rooftop_banner.jpg",
            "headText": "<em>is Lifestyle</em>",
            "paragText": "Your seven-digit self starts here",
            "btnText": "Learn more"
          },
          {
            "imgUrl": "public/img/intro-carousel/Vancouver_banner_3.jpg",
            "headText": "<em>is Us</em>",
            "paragText": "Become part of a global family of investors and business executives",
            "btnText": "Get started"
          },
        ]
      },
      cta: {},
      services: {},
      facts: {}
    });

    // figure out why this is working and learn to optimize
    // (https://handlebarsjs.com/precompilation.html)
    Handlebars.partials = Handlebars.templates;
    Handlebars.registerPartial('carousel', partialsObj.carousel); // carousel auto-slide jQuery still not functional

    // Load views templates
    const templatesObj = callHandlebarsTemplates({
      about: {
        "imgUrl": "public/img/intro-carousel/Vancouver_banner_3.jpg",
        "title": "Ascension | About Us"
      },
      home: {
        "title": "Ascension",
        "cta": {
          "header": "Join Ascension Millionaires Club!",
          "text": "Ready to take your portfolio to the next level?",
          "btn": "Join Now",
          "link": "/contact.html"
        }
      },
      team: {
        "imgUrl": "public/img/intro-carousel/Vancouver_banner_3.jpg",
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
