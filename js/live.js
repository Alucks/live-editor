try {
  Typekit.load();
} catch (e) {}

$(document).on("click", function() {
  document.documentElement.webkitRequestFullscreen();
})

$(document).on("ready", function() {
  if (typeof localStorage.name == "string") {
    $("body").addClass(localStorage.getItem("pushString"));
  }
  var textElements = [
    "cBugShow",
    "cBugGame",
    "bannerTitle",
    "bannerSub",
    "infoBarBanner",
    "comingUpTitle",
    "infoBarComingUp",
    "tName",
    "tHandle",
    "twitterContent",
    "infoBarTwitter",
    "nameLeftName",
    "nameLeftHandle",
    "nameRightName",
    "nameRightHandle",
    "nBarPerson1Name",
    "nBarPerson1Title",
    "nBarPerson2Name",
    "nBarPerson2Title",
    "nBarPerson3Name",
    "nBarPerson3Title",
    "nBarPerson4Name",
    "nBarPerson4Title",
    "nBarPerson5Name",
    "nBarPerson5Title",
    "infoBarNameBar",
    "nameBarNumber",
    "cardName",
    "cardHandle",
    "cardBody",
    "cardInfo1",
    "cardInfo2",
    "fullSocialBg"
  ];
  var iconTypes = [
    "bannerIcon",
    "comingUpIcon",
    "fullSocialIcon",
    "nameLeftIcon",
    "nameRightIcon",
    "comingUpIcon",
    "tIcon"
  ];

  $.each(textElements, function(i, value) {
    if (localStorage.getItem(value) !== null) {
      if (value === "fullSocialBg") {
        $('#fullBG').css("background-image", 'url("' + localStorage.getItem(value) + '")');
      } else {
        $('#' + value).text(localStorage.getItem(value));
      }
    }
  });
  $.each(iconTypes, function(i, value) {
    if (localStorage.getItem(value) !== null) {
      $('#' + value + ' img').attr("class", "iconWhite " + localStorage.getItem(value));
    }
  });

  window.addEventListener('storage', function(event) {
    if (event.key == "updateString") {
      $("body")[0].className = localStorage.getItem("pushString");
      $.each(textElements, function(i, value) {
         if (localStorage.getItem(value) !== null) {
        $('#' + value).text(localStorage.getItem(value));
         }
      });
      $.each(iconTypes, function(i, value) {
        if (localStorage.getItem(value) !== null) {
          $('#' + value + ' img').attr("class", "iconWhite " + localStorage.getItem(value));
        }
      });
      animationHeighIni();
    }

  });

  // Cahnge Element Heights Based on content

function animationHeighIni() {
      function bannerHeight() {
        var lh = $('#banner .lowerContent').height();
        var lowerh = lh + 40;
        if (lowerh < 200){
          $('#banner .lower').addClass('lowerSmall');
        } else {
          $('#banner .lower').removeClass('lowerSmall');
        }
    };
    function tCardHeight() {
        var lh = $('#tCard .lowerContent').height();
        var lowerh = lh + 40;
        if (lowerh < 200){
          $('#tCard .lower').addClass('lowerSmall');
        } else {
          $('#tCard .lower').removeClass('lowerSmall');
        }

    };
    function comingUpHeight() {
        var lh = $('#comingUp .lowerContent').height();
        var lowerh = lh + 40;
        if (lowerh > 100){
          $('#comingUp .lower').addClass('lowerBig');
        } else {
          $('#comingUp .lower').removeClass('lowerBig');
        }

    };
    function fullHeight() {
        var lh = $('#fullBG .cardContentBlock').height();
        var lowerh = lh + 40;
        if (lowerh < 200){
          $('#fullBG .cardContent').addClass('lowerSmall');
        } else {
          $('#fullBG .cardContent').removeClass('lowerSmall');
        }

    };
    bannerHeight();
    tCardHeight();
    comingUpHeight();
    fullHeight();
  };
  animationHeighIni();

});