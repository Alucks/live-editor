$.fn.bootstrapSwitch.defaults.size = 'mini';
$.fn.bootstrapSwitch.defaults.onColor = 'success';
$("[class='switch']").bootstrapSwitch();

$(document).on("ready", function() {
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
      "fullSocialBg",
      "cBugSponsorImage",
      "scheduleOne",
      "scheduleTwo",
      "scheduleThree",
      "scheduleFour",
      "scheduleFive",
      "bannerWidth"
   ];
   var elementStates = [
      "cBug",
      "banner",
      "comingUp",
      "tCard",
      "nameLeft",
      "nameRight",
      "nameBar",
      "nameBarNumber",
      "fullSocial",
      "cBugLines",
      "cBugSponsor",
      "schedule",
      "scheduleNumber"
   ];
   var modules = [
     "cBug",
     "banner",
     "comingUp",
     "tCard",
     "nameLeft",
     "nameRight",
     "nameBar",
     "fullSocial",
     "cBugSponsor",
     "schedule",
   ]

   var textAreas = [
      "cardBody",
      "twitterContent"
   ];

   var iconTypes = [
  	"bannerIcon",
     "comingUpIcon",
     "fullSocialIcon",
     "nameLeftIcon",
     "nameRightIcon",
     "comingUpIcon",
     "tIcon",
     "nameBarNumber",
     "cBugLines"
  ];

   $.each(textElements, function(i, value) {
      if (localStorage.getItem(value) !== null) {
         $('input[name=' + value + ']').val(localStorage.getItem(value));
      }
   });

   $.each(iconTypes, function(i, value) {
      if (localStorage.getItem(value) !== null) {
         $('select[name=' + value + ']').val(localStorage.getItem(value));
      }
   });

   $.each(modules, function(i, value) {
      if (localStorage.getItem(value) == this + "-on") {
         $('#' + this).bootstrapSwitch('state', true, true);
      }
   });

   $.each(textAreas, function(i, value) {
      $('textarea[name=' + value + ']').val(localStorage.getItem(value));
   });

   $(".collapseButton").click(function() {
      $(this).children('span').toggleClass('glyphicon-chevron-down');
      $(this).children('span').toggleClass('glyphicon-chevron-up');
   });

   $("input[type=text] , textarea").on("input", function() {
      localStorage.setItem(this.attributes["name"].value, $(this).val());
      console.log($(this).val());
      $('#pushBtn').addClass('glow');
   });

   $('.switch').on('switchChange.bootstrapSwitch', function(event, state) {
      if ($.trim(state) == 'true') {
         console.log(this.id + "-on");
         localStorage.setItem(this.id, this.id + "-on");
      } else {
         console.log(this.id + "-off");
         localStorage.setItem(this.id, this.id + "-off");
      }
      stateStringBuild();
      $('#pushBtn').addClass('glow');
   });


   /* Controller Buttons==========*/

   var stateString;

   function stateStringBuild() {
      stateString = " ";
      $.each(elementStates, function(i, value) {
         stateString = stateString.concat(localStorage.getItem(value) + " ");
      });
      localStorage.setItem('previewString', stateString);
   };

   function stateStringClear() {
      stateString = " ";
      $.each(elementStates, function(i, value) {
        if(modules.indexOf(value) >= 0){
          $('#' + value).bootstrapSwitch('state', false, false);
          localStorage.setItem(value, value + "-off");
          stateString = stateString.concat(value + "-off ");
        } else {
          stateString = stateString.concat(localStorage.getItem(value) + " ");
        }
      });
      localStorage.setItem('previewString', stateString);
   };

   $(document).keypress(function (e) {
    if (e.which == 13) {
      str_count = localStorage.getItem('updateString');
      if (str_count == null || str_count == "null"){
        count = 0;
      } else {
        count = parseInt(str_count);
      }
      count++;

      localStorage.setItem('pushString', localStorage.getItem("previewString"));
      localStorage.setItem('updateString', count);
      console.log(localStorage.getItem("updateString"));
      $('#pushBtn').removeClass('glow');
    }
  });

  $("#pushBtn").click(function() {
      str_count = localStorage.getItem('updateString');
      if (str_count == null || str_count == "null"){
      count = 0;
      } else {
         count = parseInt(str_count);
      }
      count++;

      localStorage.setItem('pushString', localStorage.getItem("previewString"));
      localStorage.setItem('updateString', count);
      console.log(localStorage.getItem("updateString"));
      $(this).removeClass('glow');
   });

   $("#clearBtn").click(function() {
      stateStringClear();
      localStorage.setItem('pushString', localStorage.getItem("previewString"));
      str_count = localStorage.getItem('updateString');
      if (str_count == null || str_count == "null"){
      count = 0;
      } else {
         count = parseInt(str_count);
      }
      count++;
      localStorage.setItem('updateString', count);
      console.log('clear');
   });

   /* Specific selector options ===============*/
   $('select[name=nameBarNumber]').change(function() {
      var selected = $('select[name=nameBarNumber] option:selected').val();
      localStorage.setItem('nameBarNumber', selected);
      stateStringBuild();
      $('#pushBtn').addClass('glow');
   });
   $('input[name=dayNumber]').change(function() {
      var selected = $(this).val();
      localStorage.setItem('scheduleNumber', selected);
      stateStringBuild();
      $('#pushBtn').addClass('glow');
   });
   $('select[name=cBugLines]').change(function() {
      var selected = $('select[name=cBugLines] option:selected').val();
      localStorage.setItem('cBugLines', selected);
      stateStringBuild();
      $('#pushBtn').addClass('glow');
   });
   $('select.iconSelect').change(function() {
      var selected = $('select[name=' + $(this).attr('name') + '] option:selected').val();
      localStorage.setItem($(this).attr('name'), selected);
      console.log(selected);
      console.log($(this).attr('name'));
      $('#pushBtn').addClass('glow');
   });

   /*Load and Save Information ===============*/
   var liveData;


   function clearData() {
   liveData = {
                  'cBug': [{
                     'name': 'sony',
                     'cBugShow': 'Sony Post Show',
                     'cBugGame': 'Evolve',
                     'cBugLines':'singleTitle'
                  }, {
                     'name': 'microsoft',
                     'cBugShow': 'Microsoft Preshow',
                     'cBugGame': 'Halo 5',
                     'cBugLines':'doubleTitle'
                  }],
                  'nameLeft': [],
                  'nameRight': [],
                  'nameBar': [],
                  'banner': [],
                  'comingUp': [],
                  'twitter': [],
                  'fullSocial': [],
                  'schedule': [],
               };
   };
   clearData();

   function loadData() {
      if (localStorage.getItem('liveData') !== null) {
           liveData = JSON.parse(localStorage.getItem('liveData'));
         Call();
      };
   };

   // Call takes all of the localStorage data and makes saved lists out of them for the editor to select from
   function Call() {
      $('.dropdown-menu').empty();
      jQuery.each(liveData, function(i, field) {
         var mList = $('#' + i + '-select'); // Target selector ul

         jQuery.each(liveData[i], function(index, save) {
            var $li = $('<li/>');
            var $anchor = $('<a/>');
            var $remover = $('<a/>');
            $anchor.addClass('saver');
            $remover.html('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
            $remover.addClass('remover');
            $remover.data("type", i)

            jQuery.each(liveData[i][index], function(key, value) {
               if (key == 'name') {
                  $anchor.text(value); // assign name value to li text .text(value)
                  $remover.data("name", value);
               } else {
                  $anchor.data(key, value); // assign all other values to Data
               }
               $anchor.appendTo($li);
               $remover.appendTo($li);

               $li.appendTo(mList);
            });
         });
      });
   }

  // Selecting a saved state function
  $(document).on('click', 'li .saver', function(e) {
      console.log(this);
      var $this = $(this);
      var dataVal;
      for (var i = 0; i < textElements.length; i++) {
         dataVal = $this.data(textElements[i]);
         if (typeof dataVal !== 'undefined') {
            $('form [name="' + textElements[i] + '"]').val(dataVal);
            localStorage.setItem(textElements[i], dataVal);
         };
      };

      for (var i = 0; i < iconTypes.length; i++) {
         dataVal = $this.data(iconTypes[i]);
         if (typeof dataVal !== 'undefined') {
            $('form [name="' + iconTypes[i] + '"]').val(dataVal);
            localStorage.setItem(iconTypes[i], dataVal);
         };
      };
      stateStringBuild();
   });

   // Remove a saved state
   $(document).on('click', 'li .remover', function(e) {
      var $this = $(this);
      var $name = $this.data("name");
      var $type = $this.data("type");
      console.log( 'I want to remove: ' + $name + ' ' + $type)
      liveData[$type] = $.grep(liveData[$type], function(value, i){
         return (value.name !== $name );
      });
      Call();
      localStorage.setItem('liveData', JSON.stringify(liveData));
   });

   // Saving a Module State
   $('.saveBtn').on('click', function() {
      var $type = $(this).data("type");
      var $name = $('form#' + $type + 'Form [name="name"]').val();
      liveData[$type] = $.grep(liveData[$type], function(value, i){
         return (value.name !== $name );
      });
      liveData[$type].push($('form#' + $type + 'Form').serializeObject());
      localStorage.setItem('liveData', JSON.stringify(liveData));
      console.log(localStorage.getItem('liveData'));
      Call();
      $('form#' + $type + 'Form [name="name"]').val(null);
      return false;
   });

   // Export the all the current saves and clear the data
   $('#exporter').click(function() {
      $(document.getElementsByName("dataWindow")).val(JSON.stringify(liveData));
      clearData();
      Call();
   });

   // Clear the current data and import all of the data from the dataWindow text area. Clear the text area when finished
   $('#importer').click(function() {
      var dataEntry = $(document.getElementsByName("dataWindow")).val();
      liveData = JSON.parse(dataEntry);
      localStorage.setItem('liveData', JSON.stringify(liveData));
      Call();
      $(document.getElementsByName("dataWindow")).val(' ');
   });
   loadData();
   Call();
});
