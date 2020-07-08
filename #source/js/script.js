	//<Fixed header>===============================================================================
	let header = $("#header");
	let intro = $("#main-screen");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function () {
		introH = intro.innerHeight() - 70;
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
	//</Fixed header>==============================================================================

	//<Smooth scroll>==============================================================================
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let $this = $(this);
		let blockId = $this.data("scroll");
		let blockOffset = $(blockId).offset().top;

		$("html, body").animate(
			{
				scrollTop: blockOffset - 67,
			},
			500
		);
	});
	//</Smooth scroll>=============================================================================

	//<Icon menu button (burger menu)>=============================================================
	$("#js-icon-menu").click(function (event) {
		$(this).toggleClass("active");
		$("#js-menu-body").toggleClass("active");
		$("#js-overlay").toggleClass("active");
	});

	$("a").click(function (event) {
		$("#js-icon-menu, #js-menu-body, body").removeClass("active");
		$("#js-overlay").removeClass("active");
	});
	//</Icon menu button (burger menu)>============================================================
