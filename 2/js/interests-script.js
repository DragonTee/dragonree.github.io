function interestsList() {
	let n = interestsList.arguments.length;
	document.write(`<ul>`);
	for (var i = 0; i < n; i++) {		
		document.write(`<li><a href="${interestsList.arguments[i][0]}">${interestsList.arguments[i][1]}</a></li>`);
	}
	document.write(`</ul>`);
}