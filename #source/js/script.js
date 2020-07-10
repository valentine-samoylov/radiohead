	//<Icon menu button (burger menu)>=============================================================
	$("#js-icon-menu").click(function (event) {
		$(this).toggleClass("active");
		$("#js-menu-body").toggleClass("active");
		$("#js-menu__body-overlay").toggleClass("active");
	});

	$("#js-menu__item-link, #js-profile__btn, #js-menu__body-overlay").click(function (event) {
		$("#js-icon-menu, #js-menu-body, #js-menu__body-overlay").removeClass("active");
	});
	//</Icon menu button (burger menu)>============================================================
