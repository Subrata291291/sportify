
      const navbar_icon = document.querySelector(".navbar_icon");
      navbar_icon.addEventListener("click", function() {
        const body = document.body;
        body.classList.toggle("nav-open");
      });


 function scrollWaypointInit( items, trigger ) {
          items.each( function() {
            var element = $(this),
                osAnimationClass = element.data("animation"),
                osAnimationDelay = element.attr('data-animation-delay');
         
            element.css({
                '-webkit-animation-delay':  osAnimationDelay,
                '-moz-animation-delay':     osAnimationDelay,
                'animation-delay':          osAnimationDelay
            });
         
            var trigger = ( trigger ) ? trigger : element;
         
            trigger.waypoint(function() {
                element.addClass('animated').addClass(osAnimationClass);
            },{
               // triggerOnce: true,
                offset: '80%'
            });
          });
        }
        
        //Call the init
        
        $(document).ready(function(){
        
        scrollWaypointInit( $('.animateMe') );
        
        });
        

      $(document).ready(function() {
        $('ul.tabs li').click(function() {
          var tab_id = $(this).attr('data-tab');
          $('ul.tabs li').removeClass('current');
          $('.tab-content').removeClass('current');
          $(this).addClass('current');
          $("#" + tab_id).addClass('current');
        })
      })


// var counted = 0;
// $(window).scroll(function() {

//   var oTop = $('#counter').offset().top - window.innerHeight;
//   if (counted == 0 && $(window).scrollTop() > oTop) {
//     $('.count').each(function() {
//       var $this = $(this),
//         countTo = $this.attr('data-count');
//       $({
//         countNum: $this.text()
//       }).animate({
//           countNum: countTo
//         },

//         {

//           duration: 2000,
//           easing: 'swing',
//           step: function() {
//             $this.text(Math.floor(this.countNum));
//           },
//           complete: function() {
//             $this.text(this.countNum);
//             //alert('finished');
//           }

//         });
//     });
//     counted = 1;
//   }

// });

$(document).ready(function() {
  // add all to same gallery
  $(".gallery a").attr("data-fancybox","mygallery");
  // assign captions and title from alt-attributes of images:
  $(".gallery a").each(function(){
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
  $(".gallery a").fancybox();
});


$(document).ready(function(){
  $(".content").slice(0, 8).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
})


$(function () {
  var playerTrack = $("#player-track"),
    bgArtwork = $("#bg-artwork"),
    bgArtworkUrl,
    albumName = $("#album-name"),
    trackName = $("#track-name"),
    albumArt = $("#album-art"),
    sArea = $("#s-area"),
    seekBar = $("#seek-bar"),
    trackTime = $("#track-time"),
    insTime = $("#ins-time"),
    sHover = $("#s-hover"),
    playPauseButton = $("#play-pause-button"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time"),
    tTime = $("#track-length"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false,
    albums = [ 
      "Let You Down",
      "Silence",
      "Dear Alcohol",
      "Dear Mom",
      "One Thing Right",
      "Sky",
      "Alone",
      "Happier",
      "Come and Go",
      "Wishing Well",
      "Gods Country", 
      "Save Me",
      "Numb",
      "Im Fine",
      "Energy",
      "Hey There Delilah",
      "7 Years",
      "Wrecked",
      "Heroes", 
      "Lose Yourself",
      "World's Smallest Violin",
      "Do It All For You",
      "When I'm Gone",
      "I Love The Sound Of Silence"
    ],
    trackNames = [
      "NP",
      "Disturbed",
      "Dax",
      "Dax",
      "Marshmello",
      "Alan Walker",
      "Marshmello",
      "Marshmello",
      "Marshmello",
      "Juice WRLD",
      "Blake Shelton",
      "Jelly Roll",
      "Ryan Oakes",
      "Ryan Oakes",
      "Ryan Oakes",
      "Plain White T's",
      "Lukas Graham",
      "Imagine Dragons",
      "Marshmello & Alan Walker",
      "Eminem",
      "AJR",
      "Alan Walker ft. Trevor Guthrie",
      "Eminem",
      "Eminem & Disturbed"
    ],
    albumArtworks = ["_1", "_2", "_3", "_4", "_5","_6","_7","_8","_9","_10","_11","_12","_13","_14","_15","_16","_17","_18","_19","_20","_21","_22","_23","_24"],
    trackUrl = [
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Marshmello%20-%20Silence%20ft.%20Khalid.mp3",
      "https://www.six9ja.com/wp-content/uploads/2022/06/Dax_Ft_Elle_King_-_Dear_Alcohol_Remix.mp3",
      
      "http://six9ja.com/wp-content/uploads/2021/05/Dax_-_Dear_Mom.mp3",
            "https://docs.google.com/uc?export=open&id=1x0O_xdS-oNAcvgigImkycCFDc7vDt1rB",
      
"https://wowplus.net/wp-content/uploads/2019/03/Alan-Walker-Alex-Skrindo-Sky.mp3",
     
"https://docs.google.com/uc?export=open&id=196zfdLq6XUwIr4JSYNHdnjf1GiPX35Wi",
      
"https://files.ceenaija.com/wp-content/uploads/music/2022/05/Marshmello_Bastille_-_Happier_CeeNaija.com_.mp3",
      
"https://docs.google.com/uc?export=open&id=1xPIcRyaZObNNinFkD25yfh59x14iF2u-",
      
"https://docs.google.com/uc?export=open&id=1txPU2p9kclbPExtcCV6Ecpfev13O2TJH",
      
"https://files.ceenaija.com/wp-content/uploads/music/2023/03/Blake_Shelton_-_Gods_Country_CeeNaija.com_.mp3",
      "https://www.fisiermp3.pro/uploads/fs_anon_308975_1592551829.mp3",
      "https://docs.google.com/uc?export=open&id=1u2A7zO-KO5INb6kBhdawUNuYaGTrH9As",
      "https://docs.google.com/uc?export=open&id=1qF_aKpSFoy-1PsM-smzrBmo0WU1SsGvk",
      "https://docs.google.com/uc?export=open&id=1t7gLRZpDud4Lf3pxfgnB5O6hOjLvT5_I",
      "https://docs.google.com/uc?export=open&id=1fMzMA4p_or3TBWu1GBdhgDyriJUGcuS-",
      "https://docs.google.com/uc?export=open&id=1sap716FyKObY-SOPVv4dEsnBt43jugjn",
      "https://docs.google.com/uc?export=open&id=1t74Vuhj_h4JNFv2aqdOkrxBd21kz_WVg",
      "https://docs.google.com/uc?export=open&id=1rxynNGQoszRE1BzE7dt9l4psZ0ysh2Lo",
      "https://docs.google.com/uc?export=open&id=1sIX7aZWYTi2xOuGVArF13Q3aIZDcCzK1",
      "https://docs.google.com/uc?export=open&id=1seDACapHliab3Bz3ApHg86IS9CoAyD1m",
"https://docs.google.com/uc?export=open&id=1pqFVASZgxuz3jqMhRSzpxXakgdvAw8su",
"https://docs.google.com/uc?export=open&id=1pTEo3R-j_Mc4hITGDvN-E6vpgJLdJFMe",
"https://docs.google.com/uc?export=open&id=1sCZHCVdzs0vr599OYBnHakdqq-tf5g7V"
    ],
    playPreviousTrackButton = $("#play-previous"),
    playNextTrackButton = $("#play-next"),
    currIndex = -1;

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        i.attr("class", "fa fa-pause");
        audio.play();
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-play");
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;
    else --currIndex;

    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-pause");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      currAlbum = albums[currIndex];
      currTrackName = trackNames[currIndex];
      currArtwork = albumArtworks[currIndex];

      audio.src = trackUrl[currIndex];

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img.active").removeClass("active");
      $("#" + currArtwork).addClass("active");

      bgArtworkUrl = $("#" + currArtwork).attr("src");

      bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
    } else {
      if (flag == 0 || flag == 1) --currIndex;
      else ++currIndex;
    }
  }

  function initPlayer() {
    audio = new Audio();

    selectTrack(0);

    audio.loop = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.on("click", function () {
      selectTrack(1);
    });
  }

  initPlayer();
});




$(document).ready(function() {
        $(window).scroll(function() {
          if ($(document).scrollTop() > 270) {
            $(".header_area").addClass("shrink")
          } else {
            $(".header_area").removeClass("shrink")
          }
        });
      });





$(function () {
  var playerTrack = $("#player-track1"),
    bgArtwork = $("#bg-artwork1"),
    bgArtworkUrl,
    albumName = $("#album-name1"),
    trackName = $("#track-name1"),
    albumArt = $("#album-art1"),
    sArea = $("#s-area1"),
    seekBar = $("#seek-bar1"),
    trackTime = $("#track-time1"),
    insTime = $("#ins-time1"),
    sHover = $("#s-hover1"),
    playPauseButton = $("#play-pause-button1"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time1"),
    tTime = $("#track-length1"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false,
    albums = [ 
      "Let You Down",
      "Silence",
      "Dear Alcohol",
      "Dear Mom",
      "One Thing Right",
      "Sky",
      "Alone",
      "Happier",
      "Come and Go",
      "Wishing Well",
      "Gods Country", 
      "Save Me",
      "Numb",
      "Im Fine",
      "Energy",
      "Hey There Delilah",
      "7 Years",
      "Wrecked",
      "Heroes", 
      "Lose Yourself",
      "World's Smallest Violin",
      "Do It All For You",
      "When I'm Gone",
      "I Love The Sound Of Silence"
    ],
    trackNames = [
      "NP",
      "Disturbed",
      "Dax",
      "Dax",
      "Marshmello",
      "Alan Walker",
      "Marshmello",
      "Marshmello",
      "Marshmello",
      "Juice WRLD",
      "Blake Shelton",
      "Jelly Roll",
      "Ryan Oakes",
      "Ryan Oakes",
      "Ryan Oakes",
      "Plain White T's",
      "Lukas Graham",
      "Imagine Dragons",
      "Marshmello & Alan Walker",
      "Eminem",
      "AJR",
      "Alan Walker ft. Trevor Guthrie",
      "Eminem",
      "Eminem & Disturbed"
    ],
    albumArtworks = ["_11", "_21", "_31", "_41", "_51","_61","_71","_81","_91","_101","_111","_121","_13","_14","_15","_16","_17","_18","_19","_20","_21","_22","_23","_24"],
    trackUrl = [
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Marshmello%20-%20Silence%20ft.%20Khalid.mp3",
      "https://www.six9ja.com/wp-content/uploads/2022/06/Dax_Ft_Elle_King_-_Dear_Alcohol_Remix.mp3",
      
      "http://six9ja.com/wp-content/uploads/2021/05/Dax_-_Dear_Mom.mp3",
            "https://docs.google.com/uc?export=open&id=1x0O_xdS-oNAcvgigImkycCFDc7vDt1rB",
      
"https://wowplus.net/wp-content/uploads/2019/03/Alan-Walker-Alex-Skrindo-Sky.mp3",
     
"https://docs.google.com/uc?export=open&id=196zfdLq6XUwIr4JSYNHdnjf1GiPX35Wi",
      
"https://files.ceenaija.com/wp-content/uploads/music/2022/05/Marshmello_Bastille_-_Happier_CeeNaija.com_.mp3",
      
"https://docs.google.com/uc?export=open&id=1xPIcRyaZObNNinFkD25yfh59x14iF2u-",
      
"https://docs.google.com/uc?export=open&id=1txPU2p9kclbPExtcCV6Ecpfev13O2TJH",
      
"https://files.ceenaija.com/wp-content/uploads/music/2023/03/Blake_Shelton_-_Gods_Country_CeeNaija.com_.mp3",
      "https://www.fisiermp3.pro/uploads/fs_anon_308975_1592551829.mp3",
      "https://docs.google.com/uc?export=open&id=1u2A7zO-KO5INb6kBhdawUNuYaGTrH9As",
      "https://docs.google.com/uc?export=open&id=1qF_aKpSFoy-1PsM-smzrBmo0WU1SsGvk",
      "https://docs.google.com/uc?export=open&id=1t7gLRZpDud4Lf3pxfgnB5O6hOjLvT5_I",
      "https://docs.google.com/uc?export=open&id=1fMzMA4p_or3TBWu1GBdhgDyriJUGcuS-",
      "https://docs.google.com/uc?export=open&id=1sap716FyKObY-SOPVv4dEsnBt43jugjn",
      "https://docs.google.com/uc?export=open&id=1t74Vuhj_h4JNFv2aqdOkrxBd21kz_WVg",
      "https://docs.google.com/uc?export=open&id=1rxynNGQoszRE1BzE7dt9l4psZ0ysh2Lo",
      "https://docs.google.com/uc?export=open&id=1sIX7aZWYTi2xOuGVArF13Q3aIZDcCzK1",
      "https://docs.google.com/uc?export=open&id=1seDACapHliab3Bz3ApHg86IS9CoAyD1m",
"https://docs.google.com/uc?export=open&id=1pqFVASZgxuz3jqMhRSzpxXakgdvAw8su",
"https://docs.google.com/uc?export=open&id=1pTEo3R-j_Mc4hITGDvN-E6vpgJLdJFMe",
"https://docs.google.com/uc?export=open&id=1sCZHCVdzs0vr599OYBnHakdqq-tf5g7V"
    ],
    playPreviousTrackButton = $("#play-previous1"),
    playNextTrackButton = $("#play-next1"),
    currIndex = -1;

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        i.attr("class", "fa fa-pause");
        audio.play();
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-play");
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;
    else --currIndex;

    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-pause");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      currAlbum = albums[currIndex];
      currTrackName = trackNames[currIndex];
      currArtwork = albumArtworks[currIndex];

      audio.src = trackUrl[currIndex];

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img.active").removeClass("active");
      $("#" + currArtwork).addClass("active");

      bgArtworkUrl = $("#" + currArtwork).attr("src");

      bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
    } else {
      if (flag == 0 || flag == 1) --currIndex;
      else ++currIndex;
    }
  }

  function initPlayer() {
    audio = new Audio();

    selectTrack(0);

    audio.loop = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.on("click", function () {
      selectTrack(1);
    });
  }

  initPlayer();
});


function playAudio() {
  var audio = document.getElementById("myAudio");
  var image = document.getElementById("play_pic");

  // Check if the audio is paused or has ended
  if (audio.paused || audio.ended) {
    audio.play();
  } else {
    // Pause the audio if it is currently playing
    audio.pause();
  }
  // Check the current image source
  if (image.src.endsWith("play-square-grey.png")) {
    // Change to the second image
    image.src = "images/pause-square-blue.png";
    image.alt = "Image 2";
  } else {
    // Change back to the first image
    image.src = "images/play-square-grey.png";
    image.alt = "play_img";
  }
}

