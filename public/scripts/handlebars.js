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
            "imgUrl": "public/img/intro-carousel/sunset_rooftop_banner.jpg",
            "headText": "is Lifestyle",
            "paragText": "Your seven-digit self starts here",
            "btnText": "Learn more"
          },
          {
            "imgUrl": "public/img/intro-carousel/Experience_banner.jpg",
            "headText": "is Experience",
            "paragText": "With over 20 years in the industry, our network of entrepreneurs and business professionals consistently delivers superior returns to investors",
            "btnText": "Get started"
          },
          {
            "imgUrl": "public/img/intro-carousel/airplane_landing.jpg",
            "headText": "is Trust",
            "paragText": "We've empowered 100's of investors attain their financial goals",
            "btnText": "Learn more"
          },
          {
            "imgUrl": "public/img/intro-carousel/Mazunte_banner.jpg",
            "headText": "is Exclusive",
            "paragText": "Members get access to early-stage financings not available through traditional platforms",
            "btnText": "Get started"
          },
          {
            "imgUrl": "public/img/intro-carousel/Vancouver_banner_3.jpg",
            "headText": "is Us",
            "paragText": "Become part of a global family of investors and business executives",
            "btnText": "Get started"
          },
        ]
      },
      cta: {},
      services: {},
      facts: {},
      contact: {},
      clients: {},
    });

    // figure out why this is working and learn to optimize
    // (https://handlebarsjs.com/precompilation.html)
    Handlebars.partials = Handlebars.templates;
    Handlebars.registerPartial('carousel', partialsObj.carousel); // figure out to precompile so can use the lighter runtime scrip (https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.runtime.min.js)

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
        },
        "anchor": "#intro"
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
