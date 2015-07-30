function getCurrentTabUrl(callback) {

var queryInfo = {
	active: true,
	currentWindow: true
};

chrome.tabs.query(queryInfo, function(tabs){
	var tab = tabs[0];
	var url = tab.url;
	callback(url);

});


};

chrome.browserAction.onClicked.addListener(function(tab) {
	getCurrentTabUrl(function(url) {
		url = url.replace("youtube", "listenonrepeat");
		chrome.tabs.update({
			url: url
		})

	})
});

