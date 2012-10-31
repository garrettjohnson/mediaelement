/*
* Trouble Downloading DOWNLOAD It!
*/

(function($) {

$.extend(mejs.MepDefaults, {
	bufferDownloadSeconds: '',
	googleAnalyticsCategory: 'Videos'
});


$.extend(MediaElementPlayer.prototype, {
	buildgoogleanalytics: function(player, controls, layers, media) {
			
		media.addEventListener('waiting', function() {
			if (typeof _gaq != 'undefined') {

			}
		}, false);

	}
});
	
})(mejs.$);