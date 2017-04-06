(function($){

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

	var example1 = document.getElementById("example1");
	example1.onclick = function () {
		new Animate({
			el: example1,
			classNames: ["shake", "rotate", "scale"]
		});
	};
})(jQuery)