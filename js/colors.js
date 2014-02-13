var since = 0, mycount = 12, mycounter = 0, isReady = false, myTimer;

var w = new Array();


$(function() { 
   drawMore();
   myTimer = setTimeout("drawMore", 100);
});

loaded = function(data) {
	 w = data.searchTweets.result.statuses;
	 isReady = true;
}

drawMore = function() {
	 clearTimeout(myTimer);
	 if (isReady) {
		if ( w[0].text.indexOf('http') == -1) {
			console.log(mycount, w[0].text);
			if (mycount ==1) {
				$('#container div:empty').append('<div id="' + w[0].id + '" class="' + w[0].text.toLowerCase().replace(/[,(\.)]/, '').replace(/[^\w\s]/, '') + '" style="height:25px;width:25px;" />');
			} else {
				$('#container div:empty').append('<div id="' + w[0].id + '" class="' + w[0].text.toLowerCase().replace(/[,(\.)]/, '').replace(/[^\w\s]/, '') + '" style="padding-left:25px;padding-top:25px;height:'+(54+(mycount-2)*54)+'px;width:'+(54+(mycount-2)*54)+'px;" />');
			}
			w.shift();
			mycount--;
			if (w.length == 0 || mycount == 0) {
				$('#container > div:empty').append("&nbsp;");
			} else {
				drawMore();
			}
		} else {
			w.shift();
			drawMore();
		}
	} else {
		myTimer = setTimeout("drawMore", 100);
	}
}