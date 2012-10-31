/*
* Google Analytics Plugin
* Requires
*
*/

(function($) {

$.extend(mejs.MepDefaults, {
	bigPlay: '',
});


$.extend(MediaElementPlayer.prototype, {
	buildbigplay: function(player, controls, layers, media) {
		if (!player.isVideo)
			return;

		audiobigPlay = 
			$('<div class="mejs-overlay mejs-layer mejs-overlay-audio-play">'+
				'<div class="mejs-overlay-button"></div>'+
			'</div>')
			.appendTo(layers);
	}
});
	
})(mejs.$);