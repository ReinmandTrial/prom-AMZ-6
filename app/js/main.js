$(document).ready(function () {

   $('.activate__input').on("keyup", function () {
      // alert("dfds");
      let email = $(".activate__input").val();
      if ((email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) || email == '') {
         $(".activate__blackbtn").prop('disabled', true);
      } else {
         $(".activate__blackbtn").prop('disabled', false);
      }

   });

   $('.js-star-item').mouseover(function () {
      count = 0;
      var i = 0;
      var j = 0;
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');

      $(thisItem).each(function () {
         if ($(this).hasClass('active')) {
            count++;
         }
      })
      $(thisItem).each(function () {
         $(this).removeClass('active');
      })
      $(this).addClass('js-prov');
      $(thisItem).each(function () {
         $(this).removeClass('js-hover');
      })
      $(thisItem).each(function (index) {
         if ($(this).hasClass('js-prov')) {
            i = index;
         }
      })
      $(thisItem).each(function (index) {
         if (index < i + 1) {
            $(this).addClass('js-hover');
         }
      })
   })
   $('.js-star-item').mouseout(function () {
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');

      $(this).removeClass('js-prov');
      $(thisItem).each(function () {
         $(this).removeClass('js-hover');
      })
      $(thisItem).each(function (index) {
         if (index < count) {
            $(this).addClass('active');
         }
      })
   })
   $('.js-star-item').on('click', function () {
      var count_star = 0;
      count = 0;
      var i = 0;
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');
      $(this).addClass('active');
      $(thisItem).each(function (index) {
         if ($(this).hasClass('active')) {
            i = index;
         }
      })
      $(thisItem).each(function () {
         $(this).removeClass('active');
      })
      $(thisItem).each(function (index) {
         if (index < i + 1) {
            $(this).addClass('active');
            count_star++;
         }
      })
      if (count_star <= 3) {
         $('.rating__blackbtn').attr('onclick', 'document.location="badrating.html"');
      } else if (count_star <= 4) {
         // $('.rating__blackbtn').attr('onclick', 'document.location="badrating.html"');
      } else if (count_star <= 5) {
         $('.rating__blackbtn').attr('onclick', 'document.location="goodrating.html"');
      }
   });

   $('.rating__input, .js-star-item').on("keyup click", function () {

      let val = $(".rating__input").val();
      if (val.length > 2 && $('.js-star-item').hasClass('active')) {
         $(".rating__blackbtn").prop('disabled', false);
      } else {
         $(".rating__blackbtn").prop('disabled', true);
      }
   });
   $('input').on("keyup", function () {
      let val = $(this).val();
      if (val.length > 2) {
         $(this).addClass('filled')
      } else {
         $(this).removeClass('filled')
      }

      // let val = $("input").val();
      if (val.length > 2) {
         $(".badrating__blackbtn").prop('disabled', false);
      } else {
         $(".badrating__blackbtn").prop('disabled', true);
      }
   });
})
// console.log($("input").length);