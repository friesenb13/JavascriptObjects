console.log("connected");

var quote1 = {
	quote: '"We don\'t make mistakes, just happy little accidents."-Bob Ross',
	author: "Bob Ross",
	tags: ["painting", "mistakes"],
	color: "#0a3410",
	display: function() {
		var quoteString = "";
		quoteString += "<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite";
		quoteString += "</div>"
		$("body").prepend(quoteString)
	}
}
var quote2 = {
	quote: '"Creativity takes courage."- Henry Matisse',
	author: "Henry Matisse",
	tags: ["courage", "Creativity"],
	color: "#154175",
	display: function() {
		var quoteString = "";
		quoteString += "<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite";
		quoteString += "</div>"
		$("body").prepend(quoteString)
	}
}
var quote3 = {
	quote: '"There\s nothing wrong with having a tree as a friend"-Bob Ross',
	author: "Bob Ross",
	tags: ["painting", "mistakes"],
	color: "#6E1DA5",
	display: function() {
		var quoteString = "";
		quoteString += "<div style='background:" + this.color + "'>";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite";
		quoteString += "</div>"
		$("body").prepend(quoteString)
	}
}



quote1.display();
quote2.display();
quote3.display();





