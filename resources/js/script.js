$(window).on("load", function () {
	$('.js--section-about').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('follow');
		} else {
			$('nav').removeClass('follow');
		}

	}, {
			offset: '2%;'
	});

	    /* Navigation scroll */
    $(function() {
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

 	    /* Contact form and */

$(function() {

	var form = $('#ajax-contact');

	var formMessages = $('#form-messages');

	
	$(form).submit(function(e) {
		
		e.preventDefault();

		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			url: '//formspree.io/miranda.howitt@gmail.com',
			method: 'POST',
			data: formData,
			dataType: "json"
		})
		.done(function(response) {
			
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text('response');

			// Clearing the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {

			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});







});