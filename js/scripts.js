

function Quote(quoteText, author, tags, color) {
	this.quote = quoteText; 
	this.author= author;
	this.tags= tags;
	this.color= color;
	this.display= function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
			// $("body").prepend("<button>" + tag + "</button>")
		})
		container.css("background", this.color)
		container.addClass("quote")

		var quoteString = "";
		quoteString += "<p>" + this.quote + "</p>";
		quoteString += "<cite>" + this.author + "</cite";

		container.html(quoteString)
		$(".quotes").prepend(container)
	}
}

var quotes = [
	new Quote('"We don\'t make mistakes, just happy little accidents."-Bob Ross', 
	"Bob Ross",["painting", "mistakes"], "#0a3410"),
	new Quote ('"Creativity takes courage."- Henry Matisse', "Henry Matisse",
 	["courage", "creativity"], "#154175"),
	new Quote('"There\s nothing wrong with having a tree as a friend"-Bob Ross', "Bob Ross"
,["painting", "tree"], "#6E1DA5")]

//global taglist
var tagList = []

quotes.forEach(function(quote){
	quote.display();
//check to see if tag has been added to taglist
	quote.tags.forEach(function(tag){
		if(!tagList.includes(tag)){
			//if it isn't added, add it
		tagList.push(tag);
		//and also make a button for it
		$(".buttons").prepend("<button class='filter'>" + tag + "</button>")

		}
	})
})
console.log(tagList)

$(".filter").on("click", function() {
	var tag = $(this).text();

	console.log(tag)

	$(".quote").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active");
	$(this).addClass("active");
	

})

// var quote1 = {
// 	quote: '"We don\'t make mistakes, just happy little accidents."-Bob Ross',
// 	author: "Bob Ross",
// 	tags: ["painting", "mistakes"],
// 	color: "#0a3410",
// 	display: function() {
// 		var quoteString = "";
// 		quoteString += "<div style='background:" + this.color + "'>";
// 		quoteString += "<p>" + this.quote + "</p>";
// 		quoteString += "<cite>" + this.author + "</cite";
// 		quoteString += "</div>"
// 		$("body").prepend(quoteString)
// 	}
// }
// var quote2 = {
// 	quote: '"Creativity takes courage."- Henry Matisse',
// 	author: "Henry Matisse",
// 	tags: ["courage", "Creativity"],
// 	color: "#154175",
// 	display: function() {
// 		var quoteString = "";
// 		quoteString += "<div style='background:" + this.color + "'>";
// 		quoteString += "<p>" + this.quote + "</p>";
// 		quoteString += "<cite>" + this.author + "</cite";
// 		quoteString += "</div>"
// 		$("body").prepend(quoteString)
// 	}
// }
// var quote3 = {
// 	quote: '"There\s nothing wrong with having a tree as a friend"-Bob Ross',
// 	author: "Bob Ross",
// 	tags: ["painting", "tree"],
// 	color: "#6E1DA5",
// 	display: function() {
// 		var quoteString = "";
// 		quoteString += "<div style='background:" + this.color + "'>";
// 		quoteString += "<p>" + this.quote + "</p>";
// 		quoteString += "<cite>" + this.author + "</cite";
// 		quoteString += "</div>"
// 		$("body").prepend(quoteString)
// 	}
// }



// quote1.display();
// quote2.display();
// quote3.display();





