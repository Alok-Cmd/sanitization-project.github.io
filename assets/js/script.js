/* query string grab */
if (sessionStorage.getItem('qsGet') !== 'true')
  {
    sessionStorage.setItem('qsVal', window.location.href.slice(window.location.href.indexOf('?') + 1));

    if (sessionStorage.getItem('qsVal') === window.location.href || sessionStorage.getItem('qsVal') === '')
    {
      sessionStorage.setItem('qsVal', 'csource=Digital%20Direct');
    }

    $(".querystring").val(sessionStorage.getItem('qsVal'));
    
    sessionStorage.setItem('qsGet','true');
  }
  else
  {
    $(".querystring").val(sessionStorage.getItem('qsVal'));
  }

/* end of query string grab */

/* modal killer */
if (sessionStorage.getItem('popOnce') !== 'true')
{
  function showModal()
  {
    if (!$("#krmodal").is(":visible"))
    {
      $("#krmodal").modal('show');
      sessionStorage.setItem('popOnce','true');
    }
  }

  var modpop;

  function modalTimeSet()
  {
    modpop = setTimeout(function(){showModal();},40000);
  }

  modalTimeSet();

  function modalTimeKill()
  {
    clearTimeout(modpop);
    sessionStorage.setItem('popOnce','true');
  }

  function modalKillTrigger()
  {
    $("form :input").focus (function()
    {
      modalTimeKill();
    });
  }
  modalKillTrigger();
}
/* end of modal killer*/

/* smooth scroll */
$('.navlink[href*="#"]').on('click', function (e)
{
  e.preventDefault();

  if($( window ).width() < 992)
  {
    $('html, body').animate({
      scrollTop: ($($(this).attr('href')).offset().top - 67)
    }, 500, 'linear');
  }

  else if($( window ).width() >= 992)
  {
    $('html, body').animate({
      scrollTop: ($($(this).attr('href')).offset().top - 92)
    }, 500, 'linear');
  }

});
/* end of smooth scroll*/

/* click outside to close navbar*/
$(document).click(function()
{
  $('#navbarcollapse').collapse('hide');
});
/* end of click outisde to close navbar */

/* form reset on load */
$(document).ready(function()
  {
    $("form").trigger('reset');
  });
  
  $("body").on("submit", "form", function() {
    $(this).submit(function() {
        return false;
    });
    return true;
  });
/* end of form reset on load */

$("#play").click(function()
{
  $("#youtube").css("display","none");

  $("#youtubeiframe").css("display","block");
    $("#youtubevideo").play();
});

/*
window.onload = function ()
{
  setTimeout
  (
    function()
    {
      $("#walkframe").attr("src" , "https://www.youtube.com/embed/safbpVu67tM");
    }, 2000
  );

  setTimeout
  (
    function()
    {
      $("#mapframe").attr("src" , "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15116.147310960383!2d73.6217591!3d18.7071693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9a2359a8fa8a41b!2sVaarivana!5e0!3m2!1sen!2sin!4v1554963981049!5m2!1sen!2sin");
    }, 4000
  );
}
*/

/* end of map delayed load */

/* sticky mob fadein */
$("#stickymob").hide();

$(window).scroll(function()
{
  if ($(this).scrollTop() >= 100)
  {
    $("#stickymob").fadeIn(500);
  }
  else
  {
    $("#stickymob").fadeOut(500);
  }
});
/* end of sticky mob fadein */

$(window).scroll(function(){
  $('nav').toggleClass('scrolled',$(this).scrollTop()>50);  
});







/* hide sticky buttons */
$("form :input").focusin(function()
{
  $("#stickymob").fadeOut(500);
});

$("form :input").focusout(function()
{
  $("#stickymob").fadeIn(500);
});
/* end of hide sticky buttons */

$('.epitome-slider').slick(
  {
    prevArrow: $('#amenleft'),
    nextArrow: $('#amenright'),
    infinite: true,
    cssEase: 'linear',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive:
    [
      {
        breakpoint: 992,
        settings:
        {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  $('.one-time').slick(
    {
    prevArrow: $('#lifeleft'),
    nextArrow: $('#liferight'),
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    adaptiveHeight: true
  });
//.............................................................................................
