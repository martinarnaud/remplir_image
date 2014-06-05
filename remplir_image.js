function remplir_image_init() {
	$(".remplir_image").each(function() {
		var html = $(this).html();
		$(this).html("<span class='image'>"+html+"</span>");
	});
	remplir_image();
}

function remplir_image() {
	$(".remplir_image").each(function() {
		var remplir = $(this);
		var largeur = remplir.width();
		var hauteur = remplir.height();
		var rapport = hauteur/largeur;
		
		
		var data_v = 0.5;
		
		if (remplir.attr("data-v")) {
			data_v = remplir.attr("data-v")
		}
		
		var img = remplir.find("img");
		var l = img.attr("data-l");
		var h = img.attr("data-h");
		var r = h / l;
		
		var image = remplir.find(".image");
		if (r < rapport) {
			image.height(hauteur);
			val = Math.ceil(hauteur/r);
			image.width(val);
			image.css("left", -0.5*(val-largeur));
			image.css("top", 0);
		} else {
			image.width(largeur);
			val = Math.ceil(largeur*r);
			image.height(val);
			image.css("top", -1 * data_v * (val-hauteur));
			image.css("left", 0);
		}	
	});
}

$(document).ready(remplir_image_init);
$(window).resize(remplir_image);
