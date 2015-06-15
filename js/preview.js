/*try {
  Typekit.load();
} catch (e) {} */

/*$(document).on("click", function() {
  document.documentElement.webkitRequestFullscreen();
})*/

$(document).on("ready", function() {
  console.log('this is the preview string => '+localStorage.getItem("previewString"));
  if (localStorage.getItem("previewString") !== null)  {
    $("body").addClass(localStorage.getItem("previewString"));
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

  function animationHeight(){
    if (event.key == "bannerTitle") {
        var lh = $('#banner .lowerContent').height();
        var lowerh = lh + 40;
        if (lowerh < 200){
          $('#banner .lower').addClass('lowerSmall');
        } else {
          $('#banner .lower').removeClass('lowerSmall');
        }

    };
    if (event.key == "twitterContent") {
        var lh = $('#tCard .lowerContent').height();
        var lowerh = lh + 40;
        if (lowerh < 200){
          $('#tCard .lower').addClass('lowerSmall');
        } else {
          $('#tCard .lower').removeClass('lowerSmall');
        }

    };
    if (event.key == "comingUpTitle") {
        var lh = $('#comingUp .lowerContent').height();
        var lowerh = lh + 40;
        if (lowerh > 100){
          $('#comingUp .lower').addClass('lowerBig');
        } else {
          $('#comingUp .lower').removeClass('lowerBig');
        }

    };
    if (event.key == "cardBody") {
        var lh = $('#fullBG .centerCardBlock').height();
        var lowerh = lh + 40;
        console.log(lowerh);
        if (lowerh < 180){
          $('#fullBG .cardContent').addClass('lowerSmall');
        } else {
          $('#fullBG .cardContent').removeClass('lowerSmall');
        }

    };

  };

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
        var lh = $('#fullBG .centerCardBlock').height();
        var lowerh = lh + 40;
        if (lowerh < 180){
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

  window.addEventListener('storage', function(event) {
    if (event.key == "previewString") {
      $("body")[0].className = localStorage.getItem("previewString");
      if (event.key == "previewString" && $("body").hasClass("fullSocial-on")) {
        var video = document.getElementById('socialVideo')
        video.currentTime = 0;
        video.load();
      } 
    }


    $.each(textElements, function(i, value) {
      if (event.key == value && localStorage.getItem(value) !== null) {
        if (value === "fullSocialBg") {
          $('#fullBG').css("background-image", 'url("' + localStorage.getItem(value) + '")');
          console.log("this is the entered value => " + localStorage.getItem(value));
        } else {
          $('#' + value).text(localStorage.getItem(value));
        }
      }
    });
    animationHeight();
    $.each(iconTypes, function(i, value) {
      if (event.key == value && localStorage.getItem(value) !== null) {
        $('#' + value + ' img').attr("class", "iconWhite " + localStorage.getItem(value));
        console.log(value + ' ' + localStorage.getItem(value));
      };
    });
  });
  animationHeighIni();
});