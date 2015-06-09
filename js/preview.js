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
    "cBug_Show",
    "cBug_Game",
    "bannerTitle",
    "bannerSub",
    "infoBarBanner",
    "comingUpTitle",
    "infoBarComingUp",
    "tName",
    "tHandle",
    "twitterContent",
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
    if (event.key == "previewString") $("body")[0].className = localStorage.getItem("previewString");
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
    $.each(iconTypes, function(i, value) {
      if (event.key == value && localStorage.getItem(value) !== null) {
        $('#' + value + ' img').attr("class", "iconWhite " + localStorage.getItem(value));
        console.log(value + ' ' + localStorage.getItem(value));
      };
    });
  });
});