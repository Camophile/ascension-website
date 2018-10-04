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
            "imgUrl": "public/img/intro-carousel/Vancouver_banner_2.jpg",
            "headText": "Ascension is Trust",
            "paragText": "Ascension is your golden key to financial independence",
            "btnText": "Learn more"
          },
          {
            "imgUrl": "public/img/intro-carousel/Toronto_banner_2.jpg",
            "headText": "Ascension is Lifestyle",
            "paragText": "Your seven-digit self starts here",
            "btnText": "Learn more"
          },
          {
            "imgUrl": "public/img/intro-carousel/Berlin_banner.jpg",
            "headText": "Ascension is Relationships",
            "paragText": "With <em>Us</em> you don’t just join an insider club, you become part of an extended family of investors and business executives",
            "btnText": "Get started"
          },
        ]
      },
      cta: {},
      services: {}
    });

    // figure out why this is working and learn to optimize
    // (https://handlebarsjs.com/precompilation.html)
    Handlebars.partials = Handlebars.templates;
    Handlebars.registerPartial('carousel', partialsObj.carousel); // carousel auto-slide jQuery still not functional

    // Load views templates
    const templatesObj = callHandlebarsTemplates({
      about: {
        "imgUrl": "public/img/section-banner/Vancouver_banner_2.jpg",
        "title": "Ascension | About Us"
      },
      home: {
        "title": "Ascension",
        "cta": {
          "header": "Ascend!",
          "text": "Ready to take your portfolio to the next level?",
          "btn": "Join The Club!",
          "link": "/contact.html"
        }
      },
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
