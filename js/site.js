(function ($){
    $(function () {
        $('.button-collapse').sideNav();
        $('.slider').slider({full_width: true});

        $(".nav-button").click(function() {
    		$('html, body').animate({
        		scrollTop: $('#' + this.id + "-container").offset().top - 50
    		}, 2000);
		});
    });
})(jQuery);

