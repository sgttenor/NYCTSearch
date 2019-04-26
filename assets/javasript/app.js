
function searchArticles(query) {


  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=KxgeNYMs0n5wEEUIYdxAcKBGp0BYEsuz";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {


    var articles = response.response.docs
    articles.forEach(function (article) {

      
      $("#results").append(`<h3>${article.headline.main}</h3>`)
      $("#results").append(`<h5>${article.snippet}</h5>`)
      $("#results").append(`<h6>${article.web_url}</h6><hr>`)
    })
  });


};




$("#submit").on("click", function (event) {
  event.preventDefault();
  var submit = $("#search-term").val();
  console.log(submit);

  searchArticles(submit);

}); 