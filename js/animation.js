(function($){
	//nav
	$(".container:not(:first)").hide();
	$(".nav li").on("click",function(){
		$(".container").hide();
		$(".container").eq($(this).index()).show();
	});

	//page1
	$(".example3 .menu").on("mouseenter",function(){
		$(this).find('ul').show(250);
	});
	$(".example3 .menu").on("mouseleave",function(){
		$(this).find('ul').hide(150);
	});
	$(".example4 .menu").on("mouseenter",function(){
		$(this).find('ul').slideDown(250);
	});
	$(".example4 .menu").on("mouseleave",function(){
		$(this).find('ul').slideUp(150);
	});
	$(".example5 .menu").on("mouseenter",function(){
		$(this).find('ul').animate({
			opacity: 1,
			left: '40px'
		},500,'swing');
	});
	$(".example5 .menu").on("mouseleave",function(){
		$(this).find('ul').animate({
			opacity: 0,
			left: '0px'
		},500,'swing');
	});

	//page2
	function Animate(config){
		var i = 0;
		var total = config.classNames.length;
		$(config.el).on("animationend",function(e){
			if (i < total) {
				$(config.el).addClass(config.classNames[i++])
			} else {
				$(config.el).removeClass();
			}
		});

		$(config.el).addClass(config.classNames[i++]);
	}

	var example6 = document.getElementById("example6");
		example6.onclick = function () {
			new Animate({
				el: example6,
				classNames: ["shake", "rotate", "scale"]
			});
		};
	})(jQuery)